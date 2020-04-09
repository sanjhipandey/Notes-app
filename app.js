const fs = require("fs");
const validator = require('validator');
const yargs = require('yargs');
const notes = require(`./notes.js`);

//fs.writeFileSync("note.txt", "hey this is a new file");
//fs.appendFileSync("note.txt", "\nthis is the extra line");
 //const name = 'Andrew'
// const msg = getNotes();
// const command = process.argv[2];
// if(command === 'add'){
//     console.log("yay");
// }
// console.log(validator.isURL('meadn'));
// console.log(msg);
// console.log(process.argv[2]);

yargs.version('1.1.0');


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string',
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string',
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }

})

yargs.command({
    command:'remove',
    describe:'Removea note',
    
builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string',
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command:'List',
    describe:'List note',
    handler(){
        notes.listNote();
    }

})
yargs.command({
    command:'read',
    describe:'read a note',
    handler(argv){
        notes.readNote(argv.title);
    }
})


yargs.parse();
// console.log(yargs.argv);
