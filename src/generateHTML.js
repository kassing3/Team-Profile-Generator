// function renderManagerCard(manager) {
//     return `
//     <article class="card mb-3">
//         <section class=" card-header bg-transparent">
//             <h3 class=""> ${manager.name}</h3>
//             <h5 class="card-subtitle  mb-2 text-muted">Manager</h5>
//         </section>
//         <section class="card-body">
//         <p class="card-text">
//             <strong>ID: </strong>${manager.id}
//             <br>
//             <strong>Office Number: </strong> ${manager.officeNum}
//         </section>
//         <section class="card-footer bg-transparent">
//             <strong>Email: </strong>
//             <a href="mailto:${manager.email} ">${manager.email} </a>
//         </section>
//     </article>`
// };

function renderEngineerCard(engineer) {
    return `
    <article class="col-12 col-sm-6">
        <div class="card mb-3">
            <section class=" card-header bg-transparent">
                <h3 class="">${engineer.name}</h3>
                <h5 class="card-subtitle  mb-2 text-muted">Engineer</h5>
            </section>
            <section class="card-body">
            <p class="card-text">
                <strong>ID: </strong>${engineer.id}
                <strong>GitHub: </strong>
                <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a>
            </p>
            </section>
            <section class="card-footer bg-transparent">
                <strong>Email: </strong>
                <a href="mailto:${engineer.email}">${engineer.email}</a>
            </section>
        </div>
    </article>`
};

function renderInternCard(intern) {
    return `
    <article class="col-12 col-sm-6">
        <div class="card mb-3">
            <section class=" card-header bg-transparent">
                <h3 class="">${intern.name}</h3>
                <h5 class="card-subtitle  mb-2 text-muted">Intern</h5>
            </section>
            <section class="card-body">
            <p class="card-text">
                <strong>ID: </strong>${intern.id}
                <strong>School: </strong>${intern.school}
            </p>
            </section>
            <section class="card-footer bg-transparent">
                <strong>Email: </strong>
                <a href="mailto:${intern.email}">${intern.email}</a>
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

    return `<!DOCTYPE html>

    <html>
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Our Team</title>
    
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">
            <link rel="stylesheet" type="text/css" href="../dist/style.css" />
           
        </head>
    
        <body class="bg-light">
    
            <header class= " p-2 text-center">
                <h1 >Meet Our Team</h1>
            </header>
    
            <main class="container-fluid">
    
                <div class="row p-3">
    
                    <section class="col-md-4" id="managerSection">
    
                        <article class="card mb-3">
                            <section class=" card-header bg-transparent">
                                <h3 class=""> ${Manager.name}</h3>
                                <h5 class="card-subtitle  mb-2 text-muted">Manager</h5>
                            </section>
                            <section class="card-body">
                            <p class="card-text">
                                <strong>ID: </strong>${Manager.id}
                                <br>
                                <strong>Office Number: </strong> ${Manager.officeNum}
                            </section>
                            <section class="card-footer bg-transparent">
                                <strong>Email: </strong>
                                <a href="mailto:${Manager.email} ">${Manager.email} </a>
                            </section>
                        </article>
    
                    </section>
    
                    <section class="col-md-8">
                        <div class="row" id="teamSection">
    
                            <article class="col-12 col-sm-6">
                                <div class="card mb-3">
                                    <section class=" card-header bg-transparent">
                                        <h3 class=""> Name</h3>
                                        <h5 class="card-subtitle  mb-2 text-muted">Engineer</h5>
                                    </section>
                                    <section class="card-body">
                                      <p class="card-text">
                                        <strong>ID: </strong>Insert ID #
                                        <br>
                                        <strong>GitHub: </strong> <a href="https://github.com/" target="_blank">Username</a>
                                      </p>
                                    </section>
                                    <section class="card-footer bg-transparent">
                                        <strong>Email: </strong>
                                        <a href="mailto:email@example.com">Email Address </a>
                                    </section>
                                </div>
                            </article>
    
                            <article class="col-12 col-sm-6">
                                <div class="card mb-3">
                                    <section class=" card-header bg-transparent">
                                        <h3 class=""> Name</h3>
                                        <h5 class="card-subtitle  mb-2 text-muted">Intern</h5>
                                    </section>
                                    <section class="card-body">
                                      <p class="card-text">
                                        <strong>ID: </strong>Insert ID #
                                        <br>
                                        <strong>School: </strong>School
                                      </p>
                                    </section>
                                    <section class="card-footer bg-transparent">
                                        <strong>Email: </strong>
                                        <a href="mailto:email@example.com">Email Address </a>
                                    </section>
                                </div>
                            </article>
                            
                            <article class="col-12 col-sm-6">
                                <div class="card mb-3">
                                    <section class=" card-header bg-transparent">
                                        <h3 class=""> Name</h3>
                                        <h5 class="card-subtitle  mb-2 text-muted">Intern</h5>
                                    </section>
                                    <section class="card-body">
                                      <p class="card-text">
                                        <strong>ID: </strong>Insert ID #
                                        <br>
                                        <strong>School: </strong>School
                                      </p>
                                    </section>
                                    <section class="card-footer bg-transparent">
                                        <strong>Email: </strong>
                                        <a href="mailto:email@example.com">Email Address </a>
                                    </section>
                                </div>
                            </article>
                            
                            <article class="col-12 col-sm-6">
                                <div class="card mb-3">
                                    <section class=" card-header bg-transparent">
                                        <h3 class=""> Name</h3>
                                        <h5 class="card-subtitle  mb-2 text-muted">Intern</h5>
                                    </section>
                                    <section class="card-body">
                                      <p class="card-text">
                                        <strong>ID: </strong>Insert ID #
                                        <br>
                                        <strong>School: </strong>School
                                      </p>
                                    </section>
                                    <section class="card-footer bg-transparent">
                                        <strong>Email: </strong>
                                        <a href="mailto:email@example.com">Email Address </a>
                                    </section>
                                </div>
                            </article>
                            
    
    
    
                        </div>
                    </section>
                </div>
            </main>
    
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
        </body>
    </html>`

}


module.exports = generateHTML;