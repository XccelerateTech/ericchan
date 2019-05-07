const express = require('express');
const profileHandler = require('../handlers/profileHandler.js');
const profileRouter = express.Router();
const profileCommentRouter = require('./profileCommentRouter')


profileRouter.get('/', profileHandler.getFeedFunc);
profileRouter.post('/:id', profileHandler.postFeedFunc);
profileRouter.put('/:id', profileHandler.putFeedFunc);
profileRouter.delete('/:id', profileHandler.deleteFeedFunc);


profileRouter.use('/comment', profileCommentRouter)

module.exports = profileRouter;
