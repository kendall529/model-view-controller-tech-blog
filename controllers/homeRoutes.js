const router = require('express').Router();
const {  } = require('../models');
const loginAuthent = require('../utils/authent');

router.get('/login', (req, res) => {
    try {
        if(req.session.loggedIn) {
            res.redirect('/profile');

            return;
        }

        res.render('login');

    } catch (err) {
        res.status(500).json(err);
    }
});

