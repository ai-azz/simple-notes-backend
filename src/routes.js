const { 
    addNoteHandler, 
    getAllNotesHandler, 
    getNoteByIdHandler, 
    editNoteByIdHandler 
} = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,  // uses the addNoteHandler function imported for adding a note
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,  // uses the getAllNotesHandler func for retrieving all notes
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,  // uses the getNoteByIdHandler func for retrieving a spesific note by its id
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,  // uses the editNoteByIdHandler funct for handling note updates
    },
];

module.exports = routes;