let biscuet = document.querySelector(".big-contener-first-2");
let lunch = document.querySelector(".big-contener-second");
let shake = document.querySelector(".big-contener-thorde");
let kall = document.querySelector(".big-contener-first-4");


let all = document.querySelector("#all")
let breakfast = document.querySelector("#Breakfast");
let go = document.querySelector("#lunch");
let back = document.querySelector("#shakes");
  
breakfast.addEventListener("click", function(){
      biscuet.style.display = "block";
      lunch.style.display = "none";
      shake.style.display = "none";
      kall.style.display = "none";

})


go.addEventListener("click", function(){
    biscuet.style.display = "none";
    lunch.style.display = "block";
    shake.style.display = "none";
    kall.style.display = "none";
})


back.addEventListener("click", function(){
    biscuet.style.display = "none";
    lunch.style.display = "none";
    shake.style.display = "block";
    kall.style.display = "none";
})

all.addEventListener("click", function(){
    biscuet.style.display = "none";
    lunch.style.display = "none";
    shake.style.display = "none";
    kall.style.display = "block";
})