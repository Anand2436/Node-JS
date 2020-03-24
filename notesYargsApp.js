const yargs = require('yargs');
const notesUtil = require('./notesUtil.js'); 

yargs.command ({
    command:'add',
    describe : 'add a note',
    builder: {
        title : {
            description : "That is a title line !!!",
            demandOption : true,
            type : 'string'
        },
        body : {
            description : "That is a body line !!!",
            demandOption : true,
            type : 'string'
        }
    },
    handler:function(argv) {
      notesUtil.addNote(argv.title,argv.body);
      console.log("Body "+argv.body);
      console.log("Title "+argv.title);  
    }
});

yargs.command({
   command:'remove',
   description:'remove a note',
    builder : {
        title: {
            description : 'Give a title to remove it',
            demandOption : true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notesUtil.removeNote(argv.title);
    }
});

console.log(yargs.argv);