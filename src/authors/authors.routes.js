var express = require('express');
var router = express.Router();
const model = require('./author.model');



router.route('/')
    .get((req, res) => {
            res.json({ message: "hooray! welcome to our api!" });
    });

router.route('/author/s')
    .post((req, res) => {
        var newAuthor = new model({
            bio: req.body.bio,
            facebook_url: req.body.facebook_url,
            first_name: req.body.first_name,
            instagram_url: req.body.instagram_url,
            last_name: req.body.last_name,
            linkedin_url: req.body.linkedin_url,
            pinterest_url: req.body.pinterest_url,
            profile_image: req.body.profile_image,
            slug: req.body.slug,
            title: req.body.title,
            twitter_handle: req.body.twitter_handle
        });
        newAuthor.save().then((author) => {
            res.json(author);
        },(err) => {
            res.send(err);
        });
    })
    .get((req, res) => {
        model.find().then((authors)=>{
            res.json(authors);
        }, (err)=>{
            res.send(err);
        }
        );
    });


router.route('/author/:author_id')
    .get( (req, res) => {
        console.log(req.params.author_id);
        model.find({"_id":req.params.author_id}).then((author)=>{
            res.json(author);
        }, (err)=>{
            res.send(error);
        });
    });

module.exports = router;