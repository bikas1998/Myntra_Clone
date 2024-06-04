//var a ="My Name is bikasha singh"

//var b=a.split(" ").reduce((x,y)=>x.length > y.length ? x : y);
 
//var b=a.split(" ").sort((a,b)=>b.length-a.length);

//console.log(b[0]);


// let largestWord =(str)=>{
//   a =str.split(" ").sort((a,b)=> b.length - a.length )
//   return(a[0])
// }

// console.log(largestWord("My Name is bikasha singh"));

//====================//

// var a ="my name is  Bikash   singh";
// var b=a.trim().split(/\s+/).join(" ");
// console.log(b);

//====================

// var genetateHash=(str)=>{
//   var str =str.split(" ").map((curElem)=>curElem.replace(curElem[0],curElem[0].toUpperCase())).join("");
//   return(`#${str}`)
// };
// console.log(genetateHash("My name is Bikash"));
//#MyNameIsBikas

//

var countChar=(word , latter)=>{
   var word =word.toLowerCase();
   var latter=latter.toLowerCase();
   var output=word.split("").reduce((accum,curChar)=>{
    if(curChar===latter){
      accum++;
    }
    return accum;
   },0);
   return output;
   };
console.log(countChar("Akash","A"))

