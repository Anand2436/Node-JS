const fs = require('fs');
const fs1 = fs;
const floors = {
    f4 : {
        jyoti : {
            sex : "F",
            isFriend : "Maybe"
        },
        vidushi : {
            sex : "F",
            isFriend : "Yes"
        },
        shubham : {
            sex : "M",
            isFriend : "Yes"
        },
        praci : {
            sex : "F",
            isFriend : "Maybe Not"
        }
    }
}

const jsonFloors = JSON.stringify(floors);
console.log(floors.f4.vidushi.sex);
console.log(jsonFloors);

//fs.writeFileSync('jsonFloors.json',jsonFloors);