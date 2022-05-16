//Template that generates HTML text for output file
//Returns array holding strings
module.exports = {
    generateHtml(teamProfArr) {
        const htmlArr = [];//empty array to hold text strings
        const htmlTemp = `
        <!DOCTYPE html>
            <html lang = "en">
            <head>
                <meta charset = "UTF-8">
                <meta name = ="viewport" content = "width = device-width, intial scale 1.0">
                <title>${teamProfArr[0]}</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="./assets/style.css" />
            </head>
        
            <body>
                <header class = "title-bar">
                    <h1>${teamProfArr[0]}</h1>
                </header>

                <div class = "card-container">
            `;
                    htmlArr.push(htmlTemp);
                    //Looping through teamProfArr to get team member profiles
                    //Using 1 since index 0 is used above
                    for(let i = 1; i < teamProfArr.length;i++) {
                        let teamMember = `
                        <div class = "team-member-card">
                            <div class = "team-member-card-top">
                                <h2>${teamProfArr[i].name}</h2>
                        `;
                            //If statement to verify order of team member
                            if(teamProfArr[i].role === "Manager") {
                                teamMember += `<h2>${teamProfArr[i].role}</h2>`;
                            }
                            else if(teamProfArr[i].role === "Enginner") {
                                teamMember += `<h2>${teamProfArr[i].role}</h2>`;
                            }
                            else if(teamProfArr[i].role === "Intern") {
                                teamMember += `<h2>${teamProfArr[i].role}</h2>`;
                            };
                            teamMember += `
                            </div>
                            <div class ="team-member-card-bottom">
                                <p><b>Employee ID:</b> ${teamProfArr[i].id}</p>
                                <p><b>Email:</b><br><a href = "mailto:${teamProfArr[i].email}">${teamProfArr[i].email}</a></p>
                            `;

                            if(teamProfArr[i].officeNum) {
                                teamMember += `<p><b>Office Number:</b><br>${teamProfArr[i].officeNum}</p>`;
                            }
                            else if(teamProfArr[i].github) {
                                teamMember += `<p><b>Github:</b><br><a href = "https://github.com/${teamProfArr[i].github}">${teamProfArr[i].github}</a></p>`;
                            };

                            teamMember +=`
                            </div>
                        </div>
                        `;
                        htmlArr.push(teamMember);
                    };

                    const htmlFooter = `
                </div>
            </body>
        </html>
        `;
        htmlArr.push(htmlFooter);
        return htmlArr;//Returns the text strings in array
    }
};