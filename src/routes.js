const { addNoteHandler } = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,  // uses the addNoteHandler function imported for adding a note
    },
];

module.exports = routes;