// var tabTitles = document.querySelectorAll(".tab-titles")
// var _skills = document.querySelector("._skills");
// var _experience = document.querySelector("._experience");
// var _education = document.querySelector("._education");
// var skills = document.querySelector(".skills")
// var experience = document.querySelector(".experience")
// var education = document.querySelector(".education")
let _home = document.querySelector("#_header")
let _work = document.querySelector("#_work")
let _contact = document.querySelector("#_contact")

// rightnav

_home.addEventListener("click", op_1);
_work.addEventListener("click", op_2);
_contact.addEventListener("click", op_3);

function op_1() {
    _home.classList.add("opnav");
    _work.classList.remove("opnav");
    _contact.classList.remove("opnav");
};
function op_2() {
    _home.classList.remove("opnav");
    _work.classList.add("opnav");
    _contact.classList.remove("opnav");
};
function op_3() {
    _home.classList.remove("opnav");
    _work.classList.remove("opnav");
    _contact.classList.add("opnav");
};

// onclick=document.getElementById('_header').style.background ='red'