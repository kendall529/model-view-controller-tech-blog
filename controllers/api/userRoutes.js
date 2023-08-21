const router = require('express').Router();
const { Users } = require('../../models');

router.get('/', (req, res) => {
    try {
        
        res.status(200).send('Get request from api/users')
    } catch (err) {
        res.status(500).json(err);
    }
})
.post('/', async (req, res) => {
    try {
        const userData = await Users.create({
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.user_id = userData.user_id
            req.session.loggedIn = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await Users.findOne({
            where: {
                username: req.body.username
            }
        });

        if(!userData) {
            res.status(400).json({ msg: 'Incorrect username or password.'})

            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;

            res.json({ user: userData, msg: 'Now logged in.'})
        });
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/logout', (req, res) => {
    if(req.session.loggedIn) {

        req.session.destroy(() => {

            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});