var Pushover = require('node-pushover');
var push = new Pushover({
    token: "APP_TOKEN",
    user: "USER_TOKEN"
});

// No callback function defined:
push.send("Some title", "Pushover test - no callback");

// A callback function is defined
push.send("Some title", "Pushover test", function (err, res){
    if(err){
        console.log("We have an error:");
        console.log(err);
        console.log(err.stack);
    }else{
        console.log("Message sent successfully");
        console.log(res);
    }
});
