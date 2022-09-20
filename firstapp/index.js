const express = require('express');
const app = express();

//everytime we make any request this runs
//this code is commented out when doing routing because it 
//matches every incoming request, and once a request is sent, 
//we are done and can't send any further response as we want to
//in our routing section
// app.use((req,res) => {
//     console.log("WE GOT A NEW REQUEST")
//      res.send("HELLO, WE GOT YOUR REQUEST. THIS IS A RESPONSE");
// })


//adding our home route which people refer to as the root route
app.get("/", (req,res) => {
    res.send("This is the home page!")
})

//Express path parameters, using patterns in our routes
//this matches the actual string subreddit and any other thing that follows this pattern
app.get("/r/:subreddit", (req,res) => {
    // console.log(req.params)

    //destructure the params object in the request objct
    const { subreddit } = req.params;

    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
})

app.get("/r/:subreddit/:postId", (req,res) => {
    // console.log(req.params)

    //destructure the params object in the request objct
    const { subreddit, postId} = req.params;

    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`);
})

app.get("/cats", (req,res) => {
    // console.log("CAT REQUEST!!!")
    res.send("Meow!!")
})

app.get("/dogs", (req,res) => {
    res.send("WOOF!!"); //res.send is used to send back a responsoe which
    //will be turned to html
})

//sending a response to a POST request
app.post("/cats", (req,res) => {
    res.send("POST REQUEST TO /CATS!! THIS IS DIFFERENT FROM A GET REQUEST")
})

//a route to match with every other path that usere might input
//this essentially means everything. It is important for this to come
//at the end after other requests otherwise, the other requests will be
//ignored. THIS IS BECAUSE ROUTES ARE MATCHED IN THE ORDER THEY ARE WRITTEN
app.get("*", (req,res) => {
    res.send("I DON'T KNOW THAT PATH");
})

//start a server to listen for requests
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})