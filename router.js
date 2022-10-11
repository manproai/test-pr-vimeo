const express = require('express');
// const popup = require('popups');
const Vimeo = require('vimeo').Vimeo;
const alert = require('alert');

const router = express.Router();

const credentials = {
    email: "admin@gmail.com",
    password: "admin123"
}
router.get("/", (req, res) => {
    res.render('base', {title: "Login"});
})


router.post("/login", (req, res) => {

    if(req.body.email == credentials.email && req.body.password == credentials.password){
        req.session.user = req.body.email;
        res.redirect('/dashboard')
        // res.send('Succefully logged in')
    } else {
        res.redirect('/')
    }
})

router.get("/dashboard", (req, res) => {

    if(req.session.user ) {
        const user = req.session.user;
        res.render('dashboard', {
            user: "user", 
            title: "Login", 
            number: req.session.number, 
            referenced: req.session.referenced,
            url: req.session.url});
    } else {
        // popup.alert({
        //     content: 'Unauthorized user'
        // });
        alert("Unauthorized user")
        res.redirect("/")
    }
})

router.get('/logout', (req, res) => {
    req.session.destroy((err)=>{
        if(err) {
            console.log(err);
            res.send("Error")
        } else {
            res.redirect('/')
        }
    })
})

router.post("/video", (req, res) => {

    if(req.body.number){

        let client = new Vimeo(
            "e87860aa6c48ab1f5d46d9e726ba9a0394b57f3b", 
            "LBQrhnf+AC6wx5wvKqLJZLgtCpPyJAsdPfUE7oPgYOIyk5z835xS07w7XIXq2JGus+wIntugNyJSRoZR/JRpOY58bTTWn3P5gIkh4cgf1M+7Y0o6NPXDOS334lH/g4rS", 
            "5cb584ea4bd49332ab0bd6eacaae6389");
          
            client.request({
              method: 'GET',
              path: '/videos/707012696',
              fields: 'files'
            }, function (error, body, status_code, headers) {
              if (error) {
                console.log('error');
                console.log(error);
              } else {
                req.session.number = req.body.number;
                req.session.referenced = true;
                req.session.url = body.player_embed_url;
                res.redirect('/dashboard')
              }
            })
        
        // res.send('Succefully logged in')
    } else {
        res.redirect('/dashboard')
    }
})

module.exports = router;