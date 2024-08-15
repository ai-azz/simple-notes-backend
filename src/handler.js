const { nanoid } = require("nanoid");  // nanoid module to generate unique IDs
const notes = require("./notes");  // import the notes array from notes.js

// define the handler func logic for saving / adding a note
const addNoteHandler = (request, h) => {
    const {title, tags, body} = request.payload;  // extract title, tags, and body from the request body (playload)
    
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

// define the handler func logic for retrieving all notes
const getAllNotesHandler = () => ({
    status: 'success',  // indicate a successful operation
    data: {
        notes,  // return the entire notes array in the response
    },
});

// define the handler func logic for retrieving a spesific note by its id
const getNoteByIdHandler = (request, h) => {
    const {id} = request.params;  // extract the note id from the request parameters

    const note = notes.filter((n) => n.id === id)[0];  // find the note with the matching id
    
    // check if a note with the given id exists
    if(note !== undefined) {
        return {
            status: 'success',  // indicate a successful operation
            data: {
                note,  // return the found note in the response
            },
        };
    }

    // if no note was found with the given id, create a failure response
    const response = h.response({
        status: 'fail',
        message: 'Catatan tidak ditemukan',
    });
    response.code(404);  // set the http status code to 404 (Not Found)
    return response;  // return the failure response
}

// define the handler func logic for editing a note by its id
const editNoteByIdHandler = (request, h) => {
    const {id} = request.params;  // extract the note id from the request parameters

    const {title, tags, body} = request.payload;  // extract title, tags, and body from the request body (payload)
    const updatedAt = new Date().toISOString();  // get the current timestamp for the update

    // find the index of the note with the matching id in the notes array (indexing array)
    const index = notes.findIndex((note) => note.id === id);

    // if the note exists in the array, update its contents
    if(index !== -1) {
        notes[index] = {
            ...notes[index],  // preserve the exiting note data
            title,  // update the title, tags, body, and the updateAt timestamp
            tags,
            body,
            updatedAt,
        };

        const response = h.response({  // create a success respond to indicate the note was updated
            status: 'success',
            message: 'Catatan berhasil diperbarui',
        });
        response.code(200);
        return response;
    }

    // if the note id is not found, create failure response
    const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui catatan. Id tidak ditemukan',
    });
    response.code(404);  // set the http status code to 404 (Not Found) to ta failure response
    return response;
};

// handler for deleteing a note by its id
const deleteNoteByIdHandler = (request, h) => {
    const {id} = request.params;  // extract the note id from the request param

    // find the index of the note with the matching id
    const index = notes.findIndex((note) => note.id === id);

    if(index !== -1) {
        notes.splice(index, 1);  // remove the note from the notes array
        const response = h.response({
            status: 'success',  // indicate successful deletion
            message: 'Catatan berhasil dihapus',
        });
        response.code(200);
        return response;
    }

    // if the note id is not found, create a failure response
    const response = h.response({
        status: 'fail',
        message: 'Catatan gagal dihapus. Id tidak ditemukan',
    });
    response.code(404);  // set the http status code 404 not found for the failure response
    return response;
};

module.exports = {
    addNoteHandler, 
    getAllNotesHandler, 
    getNoteByIdHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler,
};