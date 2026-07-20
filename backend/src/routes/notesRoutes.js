const express = require('express');
const { getNotes, addNote, removeNote } = require('../controllers/notesController');

const router = express.Router();

router.get('/', getNotes);
router.post('/', addNote);
router.delete('/:id', removeNote);

module.exports = router;
