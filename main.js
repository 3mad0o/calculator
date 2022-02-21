let display =document.querySelector('.display');
let buttons =document.querySelector('.buttons');
buttons.addEventListener('click', (e)=>{
    console.log();
    
    if(e.target.innerText == '='){
        try{
            display.innerText.replace('=','');
            display.innerText =eval(display.innerText);
        }catch{
            alert('not a right equation. prees c to repeat');
            display.innerText='';
        }
       
    }   
    display.innerText +=e.target.innerText;
    if(e.target.innerText == 'c'){
        display.innerText='';
    }
})