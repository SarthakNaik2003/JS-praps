// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let today = new Date();

let day = today.getDay();

let dayList = ["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];



let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

// determine it is AM or PM 

let prepand = (hour >= 12) ? "PM" : "AM";

// convert 24 to 12 

hour = (hour > 12) ? hour - 12 : hour ;


// checking special case at 0 hr
if(hour === 0 && prepand === "PM"){
    if(minute === 0 && second === 0){
        hour = 12
        prepand = "Noon";
    }
    else{
        hour = 12;
        prepand ="PM";
    }
}

if(hour === 0 && prepand === "AM"){
    if(minute === 0 && second === 0){
        hour = 12;
        prepand = "MidNight";
    }
    else{
        hour = 12;
        prepand = "AM"
    }
}
document.write("Current time is "+ hour + "  " + prepand + " : "+ minute + " min : " + second+" sec");
