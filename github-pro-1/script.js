const rn = document.getElementById("sbrn");
const home =document.getElementById("home")
const about=document.getElementById("about")
const contact=document.getElementById("contact")

const hero=document.getElementById("heroone")


home.addEventListener("click",()=>{
  console.log("clicked in home")
})

about.addEventListener("click",()=>{
  console.log("clicked in about")
})

contact.addEventListener("click",()=>{
  console.log("clicked in contact")
})


hero.addEventListener("click",()=>{
  console.log("hero section got clicked")
})