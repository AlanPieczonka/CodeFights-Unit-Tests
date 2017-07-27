export default function (n) {
  //Objective: check if the sum of the first half of the digits is equal to the sum of the second half
  n = n.toString(); //number to string 
  
  let firstHalf = n.substring(0, (n.length/2));
  let secondHalf = n.substring((n.length/2), n.length);
  

  let firstHalfSum = 0;
  let secondHalfSum = 0;
  
  for(let i=0; i<firstHalf.length; i++){
      firstHalfSum = +firstHalfSum + +firstHalf[i];
  }
  
  for(let j=0; j<firstHalf.length; j++){
      secondHalfSum = +secondHalfSum + +secondHalf[j];
  }
    
  return (firstHalfSum === secondHalfSum); //if sums are equal return true 

}