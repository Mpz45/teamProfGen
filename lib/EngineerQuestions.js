module.exports = [
    {
    type: "input",
    name: "engineerName",
    message: "Please enter engineer's name:",
    validate: engineerNameInput => {
        if(engineerNameInput && engineerNameInput.trim().length > 0) {
            return true;
        }
        else {
            console.log("Please enter engineer's name:");
            return false;
        };
    }
},
{
    type: "input",
    name: "engineerId",
    message: "Please enter your ID:",
    validate: engineerIdInput => {
        if(engineerIdInput && engineerIdInput.trim().length > 0) {
            return true;
        }
        else {
            console.log("Please enter your ID:");
            return false;
        };
    }
},
{
    type: "input",
    name: "engineerEmail",
    mesaage: "Please enter your email:",
    validate: engineerEmailInput => {
        if(engineerEmailInput && engineerEmailInput.trim().length > 0) {
            if (/^.+@.+\..+$/gi.test(engineerEmailInput)) {
                return true;
             };
        }
        else {
            console.log("Please enter your email:");
            return false;
        };
    }
},
{
    type: "input",
    name: "engineerGithub",
    messagee: "Please enter your Github Username:",
    validate: engineergithub => {
        if(engineergithub && engineergithub.trim().length > 0) {
            return true;
        }
        else {
            console.log("Please enter your Github Username:");
            return false;
        };
    }
}
];