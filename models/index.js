const express = require('express');
const router = express.Router();

const Author = require('./authors');
const Article = require('./Article');
const Tag = require('./tags');
const ArticleTags = require('./ArticleTags');

const setupModels = (req, res, next) => {
    req.models = {
        Author,
        Article,
        Tag,
        ArticleTags,
    };
    next();
};

module.exports = setupModels;

module.exports.Author = Author;
module.exports.Article = Article;
module.exports.Tag = Tag;
module.exports.ArticleTags = ArticleTags;