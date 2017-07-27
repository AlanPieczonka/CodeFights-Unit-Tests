export default function(inputArray){
   //Objective: return array containing all longest strings of inputArray 
   const longestWord = inputArray.sort(function (a, b) { return b.length - a.length; })[0];

   inputArray = inputArray.filter( item => item.length == longestWord.length); //get rid of shorter words
   
   return inputArray;
}