// const x=document.querySelector("#menu__icon");
// const y=document.querySelector("#menu");

// x.addEventListener("click",function(){
//     if(
//         y?.className=="hidden"){
//             y.classList.remove("hidden")
//         }else{
//             y.classList.add("hidden")
//         }
    
// })




// arro function 
const x=document.querySelector("#menu__icon");
const y=document.querySelector("#menu");

x.addEventListener("click",()=>{
    if(
        y?.className=="hidden"){
            y.classList.remove("hidden")
        }else{
            y.classList.add("hidden")
        }
    
})