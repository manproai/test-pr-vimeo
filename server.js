const express = require("express");
const path = require("path")
const app = express();

app.set("view engine", "ejs")
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.render('base', {title: "Login"});
})

const port = process.env.PORT || 8000;

app.listen(port, (err)=>{
    if(err) console.log(err);

    console.log(`The server has started on server ${port}`)
})