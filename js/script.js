/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/ 



 //Assign the variables
let c92BoxBoard = document.querySelector('div.c92BoxBoard');

let myInput = document.getElementById('myInput');
myInput.style.backgroundColor = "transparent";

let btnGenerate = document.getElementById('btnGenerate');



//Start function for btnGenerate when click
btnGenerate.addEventListener('click', function(){

    if(myInput.value <= 0 || myInput.value > 100){
        let box = `<div class="m-3 d-flex justify-content-center align-items-center">"Invalid data enter: min 1 and max 100, please try again"</div>`;
            c92BoxBoard.innerHTML = box;
        return;
    }
    
    //clear before function start
    c92BoxBoard.innerHTML = '';

    /*
    Development of the "for loop", replacing multiples of 3 and 5 
    with FizzBuzz, multiples of 3 with Fizz 
    and multiples of 5 with Buzz.
    */ 
    for(let i = 1; i <= myInput.value; i++){
        
        let stringV = '';
        let stringBg = '';

        //Start switch for control
        switch(true){
            case((i % 3 == 0 ) && (i % 5 == 0)):
                stringV = 'FizzBuzz';
                stringBg = 'c92FizzBuzz';
                console.log('FizzBuzz');
            break;
        
            case(i % 3 == 0):
                stringV = 'Fizz';
                stringBg = 'c92Fizz';
                console.log('Fizz');
            break;
        
            case(i % 5 == 0):
                stringV = 'Buzz';
                stringBg = 'c92Buzz';
                console.log('Buzz');
            break;
        
            default:
                stringV = i;
                stringBg = 'c92Default';
                console.log(i);
            break;
        
        }

        /*
        Create let box and added in html with myInput.value,
        added variable id for all box generated for added animation
        */
        let box = `<div id="boxA-${i}" class="c92Box m-3 d-flex justify-content-center align-items-center ${stringBg}">${stringV}</div>`;
        c92BoxBoard.innerHTML += box;
        let animationBox = document.getElementById(`boxA-${i}`);
        animationBox.classList += ' c92Animation'; 
            
        animationBox.style.animationDuration = `${(i * (120 - myInput.value))}ms`;
        
    }
});






