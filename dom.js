var a = document.querySelector("h1");// accessing element 
console.log(a);

// a.innerHTML = "hello"; // changing html of element 

// a.style.color = "red"; // changing css of element 

// a.addEventListener("click", function(){  // add functionalities to user response
//     a.innerHTML = "text changed through event listener";
//     a.style.color = "green";
//     a.style.font = "15px";
// })

// add functionalities to user response on BUTTON 
var bulb = document.querySelector(".bulb");
var btn = document.querySelector("input");

var flag = 0;

btn.addEventListener("click", function(){
    if(flag == 0){
        bulb.style.backgroundColor = "yellow";
        flag = 1;
    }
    else{
        bulb.style.backgroundColor = "transparent";
        flag = 0;
    }
})



{/* <h1>this is dom </h1>
    <div class="bulb"></div>
    <input type="button" value="on">
    <!-- <button class="btn">change colour</button> -->
    <script src="dom.js"></script> */}
