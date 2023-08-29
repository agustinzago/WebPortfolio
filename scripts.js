var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu")

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyky2n-6Qec8FKGKbGx9443FyGBXDymcw7yOITd7NTpPlir0lMEqImd_FPxGJTYb5Z_AQ/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

// document.addEventListener('DOMContentLoaded', function () {
//     const serviceCards = document.querySelectorAll('.services-list div');

//     serviceCards.forEach(card => {
//         card.addEventListener('click', () => {
//             card.classList.toggle('flipped'); // Toggle the 'flipped' class
//         });
//     });
// });
