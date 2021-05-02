var text=document.querySelector(".text")


text.addEventListener("keyup",function(){
var sr=document.querySelector("h3")
var text2=document.querySelector(".text").value

sr.innerHTML=text2
})
