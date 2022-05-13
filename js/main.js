let boxes=document.querySelectorAll(".box");
let bigbox=document.querySelector(".big-box");
let itemdrop;
boxes.forEach(box=>{
    box.ondragstart=function(){
        itemdrop=this;
    }
    bigbox.ondragover=(el)=>{
        el.preventDefault();
    }
    bigbox.ondrop=()=>{
        bigbox.appendChild(itemdrop)
    }
})

let right=document.getElementById('right');
let add=document.getElementById('add');
add.onclick=function(){
    let bigbox=document.createElement('div');
    bigbox.classList.add('big-box');
    right.appendChild(bigbox);
}


// box.ondragstart=function(){
//     itemdrop=this;
// }
// bigbox.ondragover=(el)=>{
//     el.preventDefault();
// }
// bigbox.ondrop=()=>{
//     bigbox.appendChild(itemdrop)
// }