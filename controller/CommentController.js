const {Article, Comment} = require('../models/Article');

exports.index = async (req, res) => {
    try {
        const comment = await Article.find();
        console.log(comment.commentsx);
        //res.json(comment.comments);
    } catch (err) {
        res.json({message : err.message});
    }
}


exports.store = async (req, res) => {
    try {
        const article = await Article.findById(req.body.article_id);
        article.comments.push({
            comment: req.body.comment
        });

        article.save();
        res.json(article.comments);
    } catch (err){
        res.json({message: err.message});
    }
}