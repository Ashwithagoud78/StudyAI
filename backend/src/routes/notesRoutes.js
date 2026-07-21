const express = require('express');
const { getNotes, 
    addNote, 
    removeNote,
    generateStudyPackController
} = require('../controllers/notesController');


const router = express.Router();

router.get('/', getNotes);
router.post('/', addNote);
router.delete('/:id', removeNote);
router.post('/study-pack', generateStudyPackController);

module.exports = router;
