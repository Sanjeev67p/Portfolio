var tabTitles = document.querySelectorAll(".tab-titles")
var _skills = document.querySelector("._skills");
var _experience = document.querySelector("._experience");
var _education = document.querySelector("._education");
var skills = document.querySelector(".skills")
var experience = document.querySelector(".experience")
var education = document.querySelector(".education")
let yourChoice


//about options
skills.addEventListener("click", op1);
experience.addEventListener("click", op2);
education.addEventListener("click", op3);


function op1() {
    _education.classList.remove("active-tab");
    _experience.classList.remove("active-tab");
    _skills.classList.add("active-tab");
};
function op2() {
    _education.classList.remove("active-tab");
    _experience.classList.add("active-tab");
    _skills.classList.remove("active-tab");
};
function op3() {
    _skills.classList.remove("active-tab");
    _experience.classList.remove("active-tab");
    _education.classList.add("active-tab");
};
