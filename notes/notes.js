console.log('Starting notes.js');

let addNote = (title, body) => {
    "use strict";
    console.log('Adding note', title, body);
};
let getAll = () => {
    "use strict";
    console.log('Getting all notes');
};
let getNote = (title) => {
    "use strict";
    console.log('Reading note:', title);
};
let removeNotes = (title) => {
    "use strict";
    console.log('Removing note:', title);
};
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNotes
};