let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let equalBtn = document.querySelector(".btn-equal");
let clear = document.querySelector(".btn-clear");
let deleteBtn = document.querySelector(".btn-delete");


for(let i=0 ; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(e){
         let btnValue= e.target.dataset.num;
         screen.value +=btnValue;
       
    })
}

equalBtn.addEventListener("click" , function(e){
    if(screen.value === ''){
        screen.value="";
    }
    else{
        let valueScreen = eval(screen.value);
        screen.value = valueScreen;
    }
    
});


clear.addEventListener("click" , function(e){
    screen.value="";
})

deleteBtn.addEventListener("click" , function(e){
    let valueArray = [...screen.value];
    let cutValue = valueArray.slice(0,-1).join("");
    screen.value = Number(cutValue);
    
})
