const { addNoteHandler, getAllNotesHandler } = require("./handler");

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
];

module.exports = routes;