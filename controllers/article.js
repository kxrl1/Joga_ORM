const articleDbModel = require('../models/article');
const artielceModel = new articleDbModel();

class articleController {
    constructor() {
        this.articles = [];
    }
    async getAllArticles(req, res) {
        const articles = await artielceModel.findAll()
        res.status(201).json({articles: articles})
    }

    async getArticleBySlug(req, res) {
        const article = await artielceModel.findOne(req.params.slug)
        res.status(201).json({article: article})
    }
}

module.exports = articleController;