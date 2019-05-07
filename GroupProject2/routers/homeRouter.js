const express = require('express');
const homeHandler = require('../handlers/homeHandler.js');
const homeRouter = express.Router();
const homeCommentRouter = require('./homeCommentRouter')


homeRouter.get('/', homeHandler.getFeedFunc);
homeRouter.post('/', homeHandler.postFeedFunc);
homeRouter.put('/:id', homeHandler.putFeedFunc);
homeRouter.delete('/:id', homeHandler.deleteFeedFunc);


homeRouter.use('/comment', homeCommentRouter)


module.exports = homeRouter;
