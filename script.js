// Navbar link
// Seleziona i link della navbar tramite le loro ID
let getAbout = document.getElementById("getAbout");
let getResume = document.getElementById("getResume");
let getProject = document.getElementById("getProject");
let getContact = document.getElementById("getContact");

// Sezioni
// Seleziona le sezioni corrispondenti alle ID
let about = document.getElementById("about");
let resume = document.getElementById("resume");
let project = document.getElementById("project");
let contact = document.getElementById("contact");

// Funzione per rimuovere le classi 'selected' e 'view'
function removeClass() {
    // Rimuove la classe 'selected' dai link della navbar
    getAbout.classList.remove('selected');
    getResume.classList.remove('selected');
    getProject.classList.remove('selected');
    getContact.classList.remove('selected');
    // Rimuove la classe 'view' dalle sezioni
    about.classList.remove('view');
    resume.classList.remove('view');
    project.classList.remove('view');
    contact.classList.remove('view');
}

// Aggiunge un evento di ascolto per il click su 'About'
getAbout.addEventListener('click', function (e) {
    // Controlla se la larghezza della finestra è maggiore di 1040 pixel
    if (window.innerWidth > 1040) {
        e.preventDefault(); // Previeni il comportamento predefinito del link
        removeClass(); // Rimuove tutte le classi 'selected' e 'view'
        about.classList.add('view'); // Aggiunge la classe 'view' alla sezione 'about'
        getAbout.classList.add('selected'); // Aggiunge la classe 'selected' al link 'About'
    }
});

// Aggiunge un evento di ascolto per il click su 'Resume'
getResume.addEventListener('click', function (e) {
    // Controlla se la larghezza della finestra è maggiore di 1040 pixel
    if (window.innerWidth > 1040) {
        e.preventDefault(); // Previeni il comportamento predefinito del link
        removeClass(); // Rimuove tutte le classi 'selected' e 'view'
        resume.classList.add('view'); // Aggiunge la classe 'view' alla sezione 'resume'
        getResume.classList.add('selected'); // Aggiunge la classe 'selected' al link 'Resume'
    }
});

// Aggiunge un evento di ascolto per il click su 'Contact'
getContact.addEventListener('click', function (e) {
    // Controlla se la larghezza della finestra è maggiore di 1040 pixel
    if (window.innerWidth > 1040) {
        e.preventDefault(); // Previeni il comportamento predefinito del link
        removeClass(); // Rimuove tutte le classi 'selected' e 'view'
        contact.classList.add('view'); // Aggiunge la classe 'view' alla sezione 'contact'
        getContact.classList.add('selected'); // Aggiunge la classe 'selected' al link 'Contact'
    }
});

// Aggiunge un evento di ascolto per il click su 'Project'
getProject.addEventListener('click', function (e) {
    // Controlla se la larghezza della finestra è maggiore di 1040 pixel
    if (window.innerWidth > 1040) {
        e.preventDefault(); // Previeni il comportamento predefinito del link
        removeClass(); // Rimuove tutte le classi 'selected' e 'view'
        project.classList.add('view'); // Aggiunge la classe 'view' alla sezione 'project'
        getProject.classList.add('selected'); // Aggiunge la classe 'selected' al link 'Project'
    }
});
