const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter your Name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please Enter your Github Username',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter your Github Name! (Required)');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself'
        }
    ]);
};

const promptProject = portfolioData => {
    //if portfolioData.projects doesnt, exist, create it
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    console.log(`Add a New Project`);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter your Project Name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of this projects (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter your Project Description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Enter your Github Project Link!');
                    return false;
                }
            }
          },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'node']
        },
        {
            type: 'input',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        //push responses to the portfolioData.projects array
        portfolioData.projects.push(projectData);
        //if user selects that they want to add another project,
        if (projectData.confirmAddProject) {
            //run through promptProject function/questions again
            return promptProject(portfolioData);
        } else {
            //otherwise, return the current data
            return portfolioData;
        }
    });
};

promptUser()
    .then(promptProject)
    .then(portfolioData => console.log(portfolioData));


/*const fs = require('fs');
const generatePage = require('./src/page-template.js');

const pageHTML = generatePage(name,github);

//const profileDataArgs = process.argv.slice(2);
//console.log(profileDataArgs);
//const name = profileDataArgs[0];
//const github = profileDataArgs[1];
//const[name, github] = profileDataArgs;



fs.writeFile('./index.html', pageHTML, err => {
    if (err) throw err;
    console.log('Portfolio Complete! Check Out Index.html to see the output');
});*/


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