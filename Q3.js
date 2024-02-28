// Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


var today = new Date()

var dd = today.getDate();

// Get the month (adding 1 because months are zero-based)
var mm = today.getMonth() + 1;

var yyyy = today.getFullYear();

// add leading zero if date less then 10

if(dd < 10) {
    dd = "0" + dd ;
}

// add leading zero if Month less then 10
if(mm < 10){
    mm = "0" + mm ;
}
//formate  mm-dd-yyyy

today = mm +"-"+ dd +"-"+ yyyy;
document.write(today +"  \n");


// formate is mm/dd/yyyy
today = mm+"/" +dd+"/" +yyyy;
document.write(today +" ");