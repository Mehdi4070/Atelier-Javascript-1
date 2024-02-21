let parag = document.getElementById("para");
let kobr = document.getElementById("num");
let naw3 = document.getElementById("text");
let color = document.getElementById("col");

color.addEventListener("input",function(){
    parag.style.color = this.value;
})

kobr.addEventListener("input",function(){
    parag.style.fontSize = this.value + "px";
})

naw3.addEventListener("input",function(){
    parag.style.fontFamily = this.value;
})

