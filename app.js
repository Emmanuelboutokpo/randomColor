let symb =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let btn = document.querySelector("button");
let span = document.querySelector("span");
let cop = document.querySelector(".cop");

btn.addEventListener("click", (e) =>{
    let randColor = "#";
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random()*symb.length);
          randColor = randColor +symb[index]
     }
     document.body.style.background = randColor;
     document.body.style.transition=1 + "s"
     span.innerHTML=randColor

     cop.addEventListener("click", (e) =>{
         navigator.clipboard.writeText(randColor);
        cop.innerHTML="Copié !"
     })
     cop.innerHTML="Copier"

 });

 