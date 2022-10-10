//packages
const express = require("express");
const path = require("path")
const app = express();
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const allRoutes = require("./router");
const session = require("express-session");

//view engine
app.set("view engine", "ejs")

//public folders
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/static', express.static(path.join(__dirname, 'public/assets')));

//session
app.use(session({
  secret: uuidv4(),
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

//getting data as json 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//endpoints
app.use("/", allRoutes);


//server 
const port = process.env.PORT || 8000;

app.listen(port, (err)=>{
    if(err) console.log(err);

    console.log(`The server has started on server ${port}`)
})