// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number.
//  The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

let num = Math.ceil(Math.random() * 10 );


const gnum = prompt('Guess the number between 1 to 10');
if(gnum == num){
    console.log("matched");
}
else{
    console.log('Not matched , the number was '+num);
}