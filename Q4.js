// . Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

// ar of triangle = root s(s-a)(s-b)(s-c)

// s = a+b+c/2

let a = 5;
let b = 6;
let c = 7;

let s = ( a + b + c ) / 2; 
let area = Math.sqrt((s)*((s-a)*(s-b)*(s-c)));


document.write("Area of triangle is " + area);