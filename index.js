//Required files
const fs = require("fs");
const inquirer = require("inquirer");

const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const employeeQuestions = require("../teamProfGen/lib/addEmployeeQuestion");
const managerQuestions = require("../teamProfGen/lib/ManagerQuestions");
const engineerQuestions = require("../teamProfGen/lib/EngineerQuestions");
const internQuestions = require("../teamProfGen/lib/InternQuestions");
const htmlArr = require("../teamProfGen/lib/htmlTemplate");

//add questions for each employee

let teamProfArr = [];//empty array

const wrtToFile = () => {
    return new Promise((resolve, reject) => {
        outputFile = teamProfArr[0].toLoercase();
        outputFile = outputFile.replace(/ /g, "-");

        fs.wrtToFile(`./page/${outputFile}.html`, htmlArr.join(""), function(err) {
            if(err) {
                reject(err);
                return;
            };
            resolve({
                ok: true,
                message: "File created. File located in pages folder."
            });
        });
    });
};

//creating html
function genHtml() {
    const htmlArr = newHtml.generateHtml(teamProfArr);
    wrtToFile(htmlArr);
};

//adding manager profile
function addManager() {
    inquirer.prompt(managerQuestions)
    .then(function(data) {
        const managerName = data.managerName;
        const managerId = data.managerId;
        const managerEmail = data.managerEmail;
        const managerOffice = data.managerOffice;
        const teamMember = new Manager(managerName, managerId, managerEmail, managerOffice);

        teamProfArr.push(teamMember);
        addNonTeam();
    });
};

//Adding Non manager roles
function addNonTeam() {
    inquirer.prompt(employeeQuestions)
    .then(function(data) {
        switch(data.employeeDatabase) {
            case "Add Engineer profile":
                addEngineer();
                break;
            case "Add Inntern profile":
                addIntern();
                break;
            case "Generate Profiles":
                genHtml();
                break;
        };
    });
};

//adding engineer profile
function addEngineer() {
    inquirer.prompt(engineerQuestions)
    .then(function(data) {
        const engineerName = data.engineerName;
        const engineerId = data.engineerId;
        const engineerEmail = data.engineerEmail;
        const engineerGithub = data.engineerGithub;
        const teamMember = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);

        teamProfArr.push(teamMember);
        addNonTeam();
    });
};

//adding intern profile
function addIntern() {
    inquirer.prompt(internQuestions)
    .then(function(data) {
        const internName = data.internName;
        const internId = data.internId;
        const internEmail = data.internEmail;
        const teamMember = new Intern(internName, internId, internEmail);

        teamProfArr.push(teamMember);
        addNonTeam();
    });
};

//Starting the appication
function init() {
    inquirer.prompt([{
        message: "Input Team Name:",
        name: "teamName",
        validate: teamNameInput => {
            if(teamNameInput && teamNameInput.trim().length > 0) {
                return true;
            }
            else {
                console.log("Input Team Name:");
                return false;
            };
        }
    }
    ])
    .then(function(data) {
        const teamName = data.teamName;
        teamProfArr.push(teamName);
        addManager();
    });
};

init();