'use strict';

/*function logger()
{
    console.log("My name is Tharun")
}

logger()
logger()
logger()*/
///////////////////////////////////////////////////////

/*
function fruitProcessor(apple,orange)
{
    // console.log(apple,orange);
    const juice = `juice with ${apple} apples and ${orange} oranges `
    return juice 
}

const price = fruitProcessor(5,0) // to use the value that is stored , we need to store it in a variable 
console.log(price)                // 1st way to print  value from func
console.log(fruitProcessor(5,0));  // 2nd way to print ,both are same 

console.log(fruitProcessor(3,2));
*/

/*
////////////////////////////////////////////
// Function declaration 

function  calAge(birthYr)
{
    return 2023-birthYr;
}

console.log(calAge(2001));

const age2 = calAge(2002);
console.log(age2)

*/

/*
// Function Expression 

const calAge2 = function (birthYr)
{
    return 2023-birthYr
}

console.log((calAge2(2001)))
*/

/*
// Arrow functions 

 const calAge3 = birthYr => 2023 - birthYr;// storing like func expression  =  // function =>  //  what u wanna return ;
 console.log((calAge3(2001)))

 // how many years left until retirement 

//  function Retirement () 
//  {
//     65 - birthYr
//  }

 const yearsUntilRetire = Retirement => 65-birthYr  // adv :  implicit return using arrow func

 */
/*
 //////////////////////////////////// arrow functions with multiple inputs

 const yearsTillRetire = (birthYear,firstName) => {  // we need name and birth year 
    const age = 2023-birthYear                       // finding current age using birth year 
    const Retirement = 65-age;                       // finding retirement age using age 
    return `${firstName} retires in ${Retirement} years`
 } 

 console.log(yearsTillRetire('2001','Tharun'));
 console.log(yearsTillRetire('1983','Aruna'));
 */

 function cutFruit(fruit){
 return fruit *4
 }


 function fruitProcessor(apple,orange)
{
    const applesCut = cutFruit(apple)
    const orangesCut = cutFruit(orange)
    const juice = `juice with ${apple} apples and ${orange} oranges `
    const fruitsCut = ` ${applesCut} apples cut and ${orangesCut} oranges are cut` 
    return {juice,fruitsCut} 
}

console.log(fruitProcessor(2,3))




