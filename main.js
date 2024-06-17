const contact = document.querySelector(".nav-contact")

contact.addEventListener("click", () => {
    document.querySelector(".AboutMe").style.display = "none"
    document.querySelector(".ProjectsNskills").style.display = "none"
    document.querySelector(".shape1").style.display = "none"
    document.querySelector(".Contact").style.display = "flex"
})

const aboutme = document.querySelector(".nav-aboutme")
const projects = document.querySelector(".nav-projects")
const skills = document.querySelector(".nav-skills")

aboutme.addEventListener("click", ()=>{
    document.querySelector(".AboutMe").style.display = "flex"
    document.querySelector(".ProjectsNskills").style.display = "block"
    document.querySelector(".shape1").style.display = "block"
    document.querySelector(".Contact").style.display = "none"
})
projects.addEventListener("click", ()=>{
    document.querySelector(".AboutMe").style.display = "flex"
    document.querySelector(".ProjectsNskills").style.display = "block"
    document.querySelector(".shape1").style.display = "block"
    document.querySelector(".Contact").style.display = "none"
})
skills.addEventListener("click", ()=>{
    document.querySelector(".AboutMe").style.display = "flex"
    document.querySelector(".ProjectsNskills").style.display = "block"
    document.querySelector(".shape1").style.display = "block"
    document.querySelector(".Contact").style.display = "none"
})