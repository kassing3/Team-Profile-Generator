function renderManagerCard(manager) {
    return `
                         <article class="card border-primary mb-3">
                            <section class=" card-header bg-primary bg-gradient text-white">
                                <h2 class="card-text text-center"> MANAGER</h2>
                            </section>
                            <section class="card-body bg-light bg-gradient">
                                <p class="card-subtitle text-muted">Hello, my name is</p>
                                <h3 class="card-title"> ${manager.name} </h3>
                                <p class="card-text">
                                    <i class="bi bi-building"></i>
                                    <strong>Employee ID: </strong> ${manager.id}
                                    <br>
                                    <i class="bi bi-envelope"></i>
                                    <strong>Email:> </strong>
                                    <a href="mailto:${manager.email}">r${manager.email} </a>
                                    <br>
                                    <i class="bi bi-telephone"></i>
                                    <strong>Office Number: </strong> 
                                    ${manager.officeNum}
                                </p>    
                            </section>
                        </article>`
};

function renderEngineerCard(engineer) {
    return `
                                <article class="col-md-12 col-lg-6">
                                    <div class="card border-primary mb-3">
                                        <section class=" card-header bg-primary bg-gradient text-white">
                                            <h2 class="card-text text-center"> ENGINEER</h2>
                                        </section>
                                        <section class="card-body">
                                            <p class="card-subtitle text-muted">Hello, my name is</p>
                                            <h3 class="card-title">${engineer.name}</h3>
                                            <p class="card-text">
                                                <i class="bi bi-building"></i>
                                                <strong>Employee ID: </strong>${engineer.id}
                                                <br>
                                                <i class="bi bi-envelope"></i>
                                                <strong>Email: </strong>
                                                <a href="mailto:${engineer.email}">${engineer.email}</a>
                                                <br>
                                                <i class="bi bi-github"></i>
                                                <strong>Github: </strong>
                                                <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a>
                                            </p> 
                                        </section>
                                    </div>
                                 </article>`
};

function renderInternCard(intern) {
    return `
                                <article class="col-md-12 col-lg-6">
                                    <div class="card border-primary mb-3">
                                        <section class=" card-header bg-primary bg-gradient text-white">
                                            <h2 class="card-text text-center">INTERN</h2>
                                        </section>
                                        <section class="card-body">
                                            <p class="card-subtitle text-muted">Hello, my name is</p>
                                            <h3 class="card-title">${intern.name}</h3>
                                            <p class="card-text">
                                                <i class="bi bi-building"></i>
                                                <strong>Employee ID: </strong>${intern.id}
                                                <br>
                                                <i class="bi bi-envelope"></i>
                                                <strong>Email: </strong>
                                                <a href="mailto:${intern.email}">${intern.email} </a>
                                                <br>
                                                <i class="bi bi-book"></i>
                                                <strong>School: </strong> 
                                                ${intern.school}
                                            </p> 
                                        </section>
                                    </div>
                                </article>`
};

function renderTeamSection (employee) {
    if (engineer) {
        return renderEngineerCard(engineer);
    };

    if (intern) {
        return renderEngineerCard(engineer);
    };
    
}

function generateHTML(data) {
    const managerCardArr =[] ;
    const teamCardsArr = [];

    for (var i = 0; i < data.length; i++){

        const employee = data[i];
        const role = employee.getRole(); 
        
        if (role === 'Manager') {
            const managerCard = renderManagerCard(employee);

            managerCardArr.push(managerCard);
        };

        if (role === 'Engineer') {
            const engineerCard = renderEngineerCard(employee);

            teamCardsArr.push(engineerCard);
        };

        if (role === 'Intern') {
            const internCard = renderInternCard(employee);

            teamCardsArr.push(internCard);
        };



    }
    
    return `<!DOCTYPE html>

    <html>
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Our Team</title>
    
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
            <link rel="stylesheet" type="text/css" href="../dist/style.css"/>
           
        </head>
    
        <body class="bg-light">
    
            <header class= " p-2 text-center">
                <h1 >Meet Our Team</h1>
            </header>
    
            <main class="container-fluid">
    
                <div class="row p-3">
    
                    <section class="col-md-6 col-lg-4" id="managerSection">
    
                        ${managerCardArr}
    
                    </section>
    
                    <section class="col-md-6 col-lg-8">
                        <div class="row" id="teamSection">

                                ${teamCardsArr.join(" ")}

                           

                        </div>
                    </section>
                </div>
            </main>
    
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
        </body>
    </html>`
}


module.exports = generateHTML;