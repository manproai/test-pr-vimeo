const express = require('express');
// const popup = require('popups');
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

    if(req.session.user) {
        const user = req.session.user;
        res.render('dashboard', {user: "user", title: "Login", number: req.session.number});
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
        req.session.number = req.body.number;
        res.redirect('/dashboard')
        // res.send('Succefully logged in')
    } else {
        res.redirect('/dashboard')
    }
})

module.exports = router;