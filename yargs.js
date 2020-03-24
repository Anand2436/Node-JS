const yargs = require('yargs');

// inputting using yargs

console.log(process.argv);
console.log(yargs.argv);

yargs.command({
    command:'add',
    describe:'add something to the table!',
    handler:function() {
        console.log("Add the swag");
    }
});

yargs.command({
    command:"read",
    describe:"read something from the table!",
    builder : {
        body : {
            description : "That is a body line !!!",
            demandOption : true,
            type : 'string'
        }
    },
    handler:function(argv) {
        console.log("Read my mind, You are already reading");
        console.log("Body was " + argv.body);
    }
})

// .argv, .parse() necessary to run and execute commands
console.log(yargs.argv);