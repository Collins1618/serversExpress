const express = require('express');
const app = express();

//everytime we make any request this runs
app.use((req,res) => {
    console.log("WE GOT A NEW REQUEST")
    console.dir(req);
})

//start a server to listen for requests
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})