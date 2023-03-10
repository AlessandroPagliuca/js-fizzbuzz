/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/ 



/*
Development of the "for loop", replacing multiples of 3 and 5 
with FizzBuzz, multiples of 3 with Fizz 
and multiples of 5 with Buzz.
*/  
let c92BoxBoard = document.querySelector('div.c92BoxBoard');

for(let i = 1; i <= 100; i++){

    let box = `<div class="c92Box debug">${i}</div>`;
    c92BoxBoard.innerHTML += box;
    switch(true){
        case((i % 3 == 0 ) && (i % 5 == 0)):
        box.innerHTML += 'FizzBuzz';
            console.log('FizzBuzz');
        break;

        case(i % 3 == 0):
            console.log('Fizz');
        break;

        case(i % 5 == 0):
            console.log('Buzz');
        break;

        default:
            console.log(i);
        break;

    }
    
}



