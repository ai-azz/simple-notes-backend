const { nanoid } = require("nanoid");  // nanoid module to generate unique IDs
const notes = require("./notes");  // import the notes array from notes.js

// define the handler func logic for saving / adding a note
const addNoteHandler = (request, h) => {
    const {title, tags, body} = request.playload;  // extract title, tags, and body from the request body (playload)
    
    const id = nanoid(16);  // generate a unique id for the new note
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    // create a new note object
    const newNote = {
        title, tags, body, id, createdAt, updatedAt,
    };

    notes.push(newNote);  // add the new note to the notes array

    // check if the note was successfully added by searching for the note ID in the array
    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if(isSuccess) {
        // if success, create a success response with the new note's id
        const response = h.response({
            status: 'success',
            message: 'Catatan berhasil ditambahkan',
            data: {
                noteId: id,
            },
        });

        response.code(201);  // set http status code to 201 (created)
        return response;  // return the success response
    }

    // if the note was not saved (added) successfully, create a failure response
    const response = h.response({
        status: 'fail',
        message: 'Catatan gagal ditambahkan',
    });
    response.code(500);  // set the http status code to 500 (Internal Server Error)
    return response;
};

module.exports = {addNoteHandler};