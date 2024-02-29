// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar

// condition
// if ! div by 4 ! LP 
//  else 
// if !div by 100 LP
// else ! div 400 !LP
// else LP



function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));

// function leapYear(yr) {
//     let year = document.getElementById(yr);

//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             alert(`${year} a leap year`);
//         } else if (year % 4 === 0) {
//             alert(`${year} a leap year`);
//         } else {
//             alert(`${year}not a leap year`);
//         }
        
//     }
//     return year;
// }
