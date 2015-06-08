var fs = require('fs');
var ejs = require('ejs')
var tumblr = require('tumblr.js');
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('y1krlXA7BNSZUtS4NoNaMA');

var csvFile = fs.readFileSync("friend_list.csv","utf8");
// console.log(csvFile);

var csv_data = csvParse(csvFile)
// console.log(csv_data);

var htmlFile = fs.readFileSync("email_template.html","utf8")
var realEmails=customizeEmail(htmlFile, csv_data)
// console.log(realEmails)

sendCustomizedEmails()
// var ejsFile = fs.readFileSync("email_template.ejs","utf8")
// var ejsEmails = customizeEJSEmail(ejsFile, csv_data, posts)
// console.log(ejsEmails)


function csvParse(file){
    var data=[]
    var rows=file.split('\n')
    var keys=rows.shift().split(',')
    rows.forEach(function(friend){
        var values = friend.split(',')
        entry={}
        for(var j = 0;j<keys.length;j++){
            entry[keys[j]]=values[j]
        }
        data.push(entry)
    })
    return data
}

function customizeEmail(template, data){
    var emails=[]
    
    data.forEach(function(friend){
        var firstName=friend['firstName']
        var numMonths=friend['numMonthsSinceContact']
        emails.push(template.replace("FIRST_NAME", firstName).replace("NUM_MONTHS_SINCE_CONTACT", numMonths))
    })
    return emails
}

function customizeEJSEmail(template, data, posts){
    // var customizedTemplate=''

    data.forEach(function(friend){
        var first_name=friend['firstName']
        var last_name=friend['lastName']
        var numMonths=friend['numMonthsSinceContact']
        var email=friend['emailAddress']
        var customizedTemplate = ejs.render(template, {
            firstName: first_name,  
            numMonthsSinceContact: numMonths,
            latestPosts: posts
        });
        sendEmail(first_name+' '+last_name, email, 'Joanna Zhang', 'rz258@cornell.edu', "Check out my new blog!", customizedTemplate)
    })
    // return customizedTemplates
}

function sendCustomizedEmails(){
    var latestPosts=[]

    // Authenticate via OAuth
    var client = tumblr.createClient({
        consumer_key: 'gc1Vjbcqq8qnZOxA315hvWj2BKc9r72OBBmtSz7gwI33IpUF2c',
        consumer_secret: 'NRVdTUlCT23VHgfDYMhNkYjK4Y6Qn0XKAuHgZbPidJV92WYLj1',
        token: 'E69fv4EGwFDDUAgbGJESXpg2YPITYTpSQNg3OOTE7KvzR3Kwln',
        token_secret: 'DZoe3G8cXwPZKVpB98zkAZkAg0cyC1J9kNjSYctaMH7E9nwwyE'
    });

    // // Make the request
    // client.userInfo(function (err, data) {
    //     // ...
    // });

    client.posts('joanaz.tumblr.com', {type: 'text'}, function(err, blog){
        blog.posts.forEach(function(post){
            var blogDate=new Date(post['date'].split(' ')[0])
            // console.log(blogDate)
            var weekBeforeToday=new Date(new Date().getTime() - (7*24*60*60*1000))
            if(weekBeforeToday<blogDate){
                latestPosts.push(post);
                // console.log(latestPosts)
            }
        });
        var ejsFile = fs.readFileSync("email_template.ejs","utf8")
        customizeEJSEmail(ejsFile, csv_data, latestPosts)
    });
}

function sendEmail(to_name, to_email, from_name, from_email, subject, message_html){
    var message = {
        "html": message_html,
        "subject": subject,
        "from_email": from_email,
        "from_name": from_name,
        "to": [{
                "email": to_email,
                "name": to_name
            }],
        "important": false,
        "track_opens": true,    
        "auto_html": false,
        "preserve_recipients": true,
        "merge": false,
        "tags": [
            "Fullstack_Tumblrmailer_Workshop"
        ]    
    };
    var async = false;
    var ip_pool = "Main Pool";
    mandrill_client.messages.send({"message": message, "async": async, "ip_pool": ip_pool}, function(result) {
        // console.log(message);
        // console.log(result);   
    }, function(e) {
        // Mandrill returns the error as an object with name and message keys
        console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
        // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
    });
 }
