const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {
    return "Your notes..";
}

const addNote = (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((notes)=> notes.title === title)
    const duplicateNote = notes.find((notes)=> notes.title === title)
        
 

    if ( !duplicateNote){
        notes.push({
            title: title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added!'))
    }
    else{
        console.log(chalk.bgRed('Note title taken !'))
    }


}


const removeNote = (title) => {
    const notes = loadNotes()
    const findNotes= notes.filter((notes) => {
        return notes.title != title ;
    })
    
    
        
        
    if(notes.length === findNotes.length){
        console.log( chalk.bgRed("title not found"));
    }
    else{
        saveNotes(findNotes);
        console.log(chalk.bgGreen("title deleted"));
    }
    
 }

const listNote = () => {
    notes =loadNotes()
    const displayNotes = notes.map((item, index) => {
        console.log(chalk.bgBlue(`${index} \n`)+ (`${item.title} \n ${item.body}` ))
    })
}

const readNote = (title) =>{
    notes = loadNotes()
    const readnote = notes.find((notes) => {
        return notes.title === title;
    })

    if(!readnote){
        console.log(chalk.bgRed("title not found !"))
    }
    else{
        console.log(readnote.title );
        console.log(readnote.body); 
    }
   
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}
const loadNotes = () => {
    try {const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
}
catch(e){
    return []
}
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote : readNote

};