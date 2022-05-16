module.exports = [
    {
    type: "input",
    name: "managerName",
    message: "Please enter manager's name:",
    validate: managerNameInput => {
        if(managerNameInput && managerNameInput.trim().length > 0) {
            return true;
        }
        else {
            console.log("Please enter manager's name:");
            return false;
        };
    }
},
{
    type: "input",
    name: "managerId",
    message: "Please enter your ID:",
    validate: managerIdInput => {
        if(managerIdInput && managerIdInput.trim().length > 0) {
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
    name: "managerEmail",
    mesaage: "Please enter your email:",
    validate: managerEmailInput => {
        if(managerEmailInput && managerEmailInput.trim().length > 0) {
            if (/^.+@.+\..+$/gi.test(managerEmailInput)) {
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
    name: "managerOfficeNum",
    messagee: "Please enter your office number:",
    validate: managerOfficeNumInput => {
        if(managerOfficeNumInput && managerOfficeNumInput.trim().length > 0) {
            return true;
        }
        else {
            console.log("Please enter your office number:");
            return false;
        };
    }
}
];