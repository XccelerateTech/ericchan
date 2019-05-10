const express = require('express');
const communityHandler = require('../handlers/community/communityHandler.js');
const communityRouter = express.Router();
const communityCommentRouter = require('./communityCommentRouter')


communityRouter.get('/:id', communityHandler.getFeedFunc);
communityRouter.post('/:id', communityHandler.postFeedFunc);
communityRouter.put('/:id', communityHandler.putFeedFunc);
communityRouter.delete('/:id', communityHandler.deleteFeedFunc);


communityRouter.use('/comment', communityCommentRouter)


module.exports = communityRouter;
