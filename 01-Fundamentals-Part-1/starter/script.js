/*let firstName = "saitharun"; 
const age = 22 ; 
const job = "AdDev";
const new1 = `Im ${firstName},a ${age} year old ${job}`
console.log(new1)
*/

// // legal for drivers licence or not 
// const age = 14 ;
// if (age>=18){
//  console.log("legal to drive")
// }
// else{
//     console.log(`is not legal to drive  and needs more ${18-age} years` )
// }


//type conversion 
// const inputYear = '2001'
// console.log(Number(inputYear),inputYear);
// console.log(inputYear + 10) ;

// const stringa = 22;
// console.log(String(stringa),stringa);


// // type coercion 
//   console.log('23'-(-'10')+3) 
//   console.log('Im '+ 23 +'years')


// //prompt

// const favNum =Number(prompt ("What is your favourite Number ?") );
// console.log(favNum)
// console.log(typeof favNum)

// if (favNum === 23)
// {
//     console.log("23 is a cool number")
// }
 

// //switch cmd 

// const day = 'wednesday' ; 
// switch (day) 
// {
//     case 'monday' :
//         console.log("study JS");
//         break ;

//     case 'tuesday' :
//         console.log("study for asp.net");
//         break;

//     case 'wednesday' :
//     case 'thursday' : 
//     console.log('study for korean')
//     break;

//     default:
//         console.log (" not a valid day")


// }

// // above code using if else

// const day = 'thursday';
// if ( day === 'monday')
// {
//     console.log("study JS");
// }
// else if ( day === 'tuesday')
// {
//     console.log("Study for ASP.net")
// }

// else if ( day === 'wednesday' || day === 'thursday' )
// {
//     console.log("Study for Korean")
// }

// else {
//     console.log("not a valid day")
// }


// //Conditional ( ternary Operator ) 

// const age = 17;

// // age >=18 ? console.log("Legal to drive ") : 
// //            console.log("illegal to drive ");

// // or 


// const check = age>= 18 ? 'Legal'  : "Illegal" 
// console.log(check)

// // or 
let age = 21;
console.log (`this man is  ${age>= 18 ? 'Legal'  : "Illegal"} to drive `);