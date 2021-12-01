// To run code, enter "node practice.js" into terminal


function printBackwards(name) {
  for (let i=name.length-1; i>=0; i--) {
    console.log(name.charAt(i));
}}

let name = 'Jenny';

printBackwards(name);