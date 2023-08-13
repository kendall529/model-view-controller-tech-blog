const router = require('express').Router();
const { Users } = require('../../models');

router.get('/', (req, res) => {
    try {
        
        res.status(200).send('Get request from api/users')
    } catch (err) {
        res.status(500).json(err);
    }
})