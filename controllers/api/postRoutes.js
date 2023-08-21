const router = require('express').Router();

const { Posts } = require('../../models');
const loginAuthent = require('../../utils/authent');

router.get('/', (req, res) => {
    try {
      console.log("api/groups message");
    
    res.status(200).send("message sent from api/groups");
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
})
.post('/', async (req, res) => {
    try {
        newPost = await Posts.create({
            title: req.body.title,
            post_content: req.body.post_content,
            post_date: req.body.post_date,
            created_by: req.session.user_id
        });

        const post = newPost.get({ plain: true});
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
})
.delete('/:id')