const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);
//console.log(profileDataArgs);
//const name = profileDataArgs[0];
//const github = profileDataArgs[1];
const[name, github] = profileDataArgs;



fs.writeFile('index.html', generatePage(name,github), err => {
    if (err) throw new Error(err);
    console.log('Portfolio Complete! Check Out Index.html to see the output');
});


//console.log(generatePage(name, github));

/*const printProfileData = profileDataArr => {
    //This
    for (let i=0; i<profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }
    console.log('=================');

    //is the same as this
    profileDataArr.forEach((profileItem) => {
        console.log(profileItem);

    });

    //and the same as this
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);*/