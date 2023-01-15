var skills = document.querySelector(".skills");
var experience = document.querySelector(".experience");
var education = document.querySelector(".education");
var aa = document.querySelector(".a")
var ba = document.getElementsByClassName(".b")
var ca = document.querySelector(".c")
let yourChoice

aa.addEventListener("click", fc);
ca.addEventListener("click", cc);
    function fc() {
    
    skills.classList.add("active-tab");

};

    function cc() {
    
    education.classList.add("active-tab");

};