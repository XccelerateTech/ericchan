"use strict"
const express = require('express');
const noteHandler = require('../handlers/noteHandler.js');
const path = require('path')
const noteRouter = express.Router();
const fs = require('fs');




noteRouter.get('/', noteHandler.getNotesWordsFunc);
// noteRouter.get('/:id', noteHandler.getNotesWordsIdFunc);
noteRouter.post('/',noteHandler.postNotesWordsFunc);
// noteRouter.post('/existingContent',noteHandler.putNoteWordsIdFunc);
noteRouter.put('/:id', noteHandler.putNoteWordsIdFunc);
noteRouter.delete('/:id', noteHandler.deleteNoteWordsIdFunc);


module.exports = noteRouter;