// Objective: return array containing all longest strings of inputArray 

// keep each function with one role
const _longestWordLength = function(collection) {
   // use arrow functions 
   // keep each line straighforward - usually one instruction 
   const sortedArray = collection.sort((a, b) => b.length - a.length );
   const [longestWord] = sortedArray;
   return longestWord.length
}

export default function(inputArray){
   // write in positive way, prefer whitelist over blacklist
   const length = _longestWordLength(inputArray);
   return inputArray.filter(item => item.length == length); // select all longest words
}