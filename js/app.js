let navbar=document.querySelector(".navbar")
let login=document.querySelector(".login")
let bars=document.querySelector("#menu-btn")
let hearts=document.querySelectorAll(".fa-heart")
console.dir(hearts);

for(heart of hearts){
   heart.addEventListener('click',function(){
    this.classList.toggle('like')
   })
}

bars.addEventListener('click',function(){
    navbar.classList.toggle('active')
    login.classList.toggle('active')
})

