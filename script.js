// Navbar link
let getAbout = document.getElementById("getAbout");
let getResume = document.getElementById("getResume");
let getProject = document.getElementById("getProject");
let getContact = document.getElementById("getContact");

// sezioni
let about = document.getElementById("about");
let resume = document.getElementById("resume");
let project = document.getElementById("project");
let contact = document.getElementById("contact");

function removeClass() {
    // link
    getAbout.classList.remove('selected');
    getResume.classList.remove('selected'); 
    getProject.classList.remove('selected');
    getContact.classList.remove('selected');
    // sezioni
    about.classList.remove('view');
    resume.classList.remove('view');
    project.classList.remove('view');
    contact.classList.remove('view');
}

getAbout.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        about.classList.add('view');
        getAbout.classList.add('selected');
    }

});
getResume.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        resume.classList.add('view');
        getResume.classList.add('selected');
    }
})
getContact.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        contact.classList.add('view');
        getContact.classList.add('selected');
    }
});

getProject.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        project.classList.add('view');
        getProject.classList.add('selected');
    }
});

