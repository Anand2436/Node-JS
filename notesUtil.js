const fs = require('fs')
const chalk = require('chalk')

const addNote = function(title,body) {
    const notesData = loadData();
    const isDuplicateTitle = checkDuplicacy(title,notesData);

    if(isDuplicateTitle.length === 0) {
        notesData.push({
            title : title,
            body : body
        });
        saveData(notesData);
        console.log("New Node added");
    } else {
        console.log("Node cant be added as Title isalready taken");
    }
}

const removeNote = function(title) {
    const notes = loadData();
    const filteredNotesWithoutGivenTitle = checkAndRemoveNote(title,notes);
    if(filteredNotesWithoutGivenTitle.length!=0) {
        saveData(filteredNotesWithoutGivenTitle);
        console.log(chalk.bgGreen("Note Removed Successfully"));
    }
}

const checkAndRemoveNote = function(title,notes) {
    const filteredNotesWithoutGivenTitle = notes.filter(function(note) {
        return note.title != title
    })
    if(filteredNotesWithoutGivenTitle.length===notes.length) {
        console.log(chalk.bgRed("No Note found with given title"));
        return [];
    } else {
        return filteredNotesWithoutGivenTitle;
    }
}

const loadData = function() {
    try {
        const dataBuffer = fs.readFileSync('notesData.json');
        const data = JSON.parse(dataBuffer); // Not same as dataBuffer.toString();
        // converts byte data buffer to json objects
        console.log(data + " <---are these equal---> " + dataBuffer.toString());
        return data;
    } catch(e) {
        return [];
    }
}

const saveData = function(notes) {
    console.log(notes);
    fs.writeFileSync('notesData.json',JSON.stringify(notes));
}

const checkDuplicacy = function(title,notesData) {
       return duplicateArray = notesData.filter(function(notes)
       {
        return notes.title===title
        });
}

module.exports = {
    addNote : addNote,
    removeNote : removeNote
}