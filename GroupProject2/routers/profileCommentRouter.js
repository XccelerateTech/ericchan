const express = require('express');
const profileCommentHandler = require('../handlers/profileCommentHandler') 
const profileCommentRouter = express.Router();


profileCommentRouter.get('/', profileCommentHandler.getCommentFunc)
profileCommentRouter.post('/:id', profileCommentHandler.postCommentFunc);
profileCommentRouter.put('/:id', profileCommentHandler.putCommentFunc);
profileCommentRouter.delete('/:id', profileCommentHandler.deleteCommentFunc);



module.exports = profileCommentRouter;