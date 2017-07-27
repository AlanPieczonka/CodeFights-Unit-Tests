export default function(s1, s2){
  //Objective: find the number of common characters between strings
  const s1arr = s1.split(''); //string to array
  const s2arr = s2.split(''); //string to array 
  
  let count = 0;
  
 for(let i=0; i<s1arr.length; i++){
  	for(let j=0; j<s2arr.length; j++){
	  	if(s1arr[i] === s2arr[j]){
	  		count++;
	  		s1arr.splice(i, 1, 'replacementS1'); //replaces element of array with 'replacementS1' so "if" doesn't pass second time
	  		s2arr.splice(j, 1, 'replacementS2'); //replaces element of array with 'replacementS1' so "if" doesn't pass second time
	  	}
  }
}
  
  return count;
}