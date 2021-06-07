const {Article} = require('../models/Article');


exports.index = async (req, res) => {
    try {
        const article = await Article.find();
        res.json(article);
    } catch (err) {
        res.json({message : err.message});
    }
}

exports.getOne = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (article == null) {
            return res.json({message: "Cannot find Article"});
        }
        res.json(article);
    } catch (err) {
        res.json({message: err.message});
    }
}

exports.store = async (req, res) => {
    const articlePost = new Article({
        title: req.body.title,
        description: req.body.description,
    });
    
    try {
        const article = await articlePost.save();
        res.json(article);
    } catch (err) {
        res.json({message: err.message});
    } 
}

exports.update = async (req, res) => {
    try {
        const articleUpdate = await Article.updateOne({_id: req.params.id}, {
            title : req.body.title,
            description: req.body.description
        });
        res.json({message: "Updated Article"});
    } catch (err) {
        res.json({message: err.message});
    }  
}

exports.delete = async (req, res) => {
    try {
        const articleDelete = await Article.deleteOne({_id: req.params.id});
        res.json({message: "Deleted Article"});
    } catch (err) {
        res.json({message: err.message});
    }  
}