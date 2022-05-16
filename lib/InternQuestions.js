module.exports = [
    {
    type: "input",
    name: "internName",
    message: "Please enter intern's name:",
    validate: internNameInput => {
       if (internNameInput && internNameInput.trim().length > 0) {
          return true;
       }
       else {
          console.log("Please enter intern's name:");
          return false;
       };
    }
 },
 {
    type: "input",
    name: "internId",
    message: "Please enter your ID:",
    validate: internIdInput => {
       if (internIdInput && internIdInput.trim().length > 0) {
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
    name: "internEmail",
    message: "Please enter your email:",
    validate: internEmailInput => {
       if (internEmailInput && internEmailInput.trim().length > 0) {
          if (/^.+@.+\..+$/gi.test(internEmailInput)) {
             return true;
          };
       }
       else {
          console.log("Please enter your email:");
          return false;
       };
    }
}
];