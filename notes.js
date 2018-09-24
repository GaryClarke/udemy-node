console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {

    try {

        var notesString = fs.readFileSync('notes-data.json');

        return JSON.parse(notesString);

    } catch (e) {

        return [];
    }
};

var saveNotes = (notes) => {

    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

/**
 * Add a note
 *
 * @param title
 * @param body
 */
var addNote = (title, body) => {

    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {

        notes.push(note);

        saveNotes(notes);

        return note;
    }
};


var getAll = () => {

    return fetchNotes();
};


var getNote = (title) => {

    var notes = fetchNotes();

    return notes.filter((note) => note.title === title)[0];
};


var remove = (title) => {

    var notes = fetchNotes();

    var safeNotes = notes.filter((note) => note.title !== title);

    saveNotes(safeNotes);

    return notes.length !== safeNotes.length;
};


var logNote = (note) => {

    console.log(`--`);
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {

    addNote,
    getAll,
    getNote,
    remove,
    logNote
};