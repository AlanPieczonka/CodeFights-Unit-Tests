export default function (s){
  //Objective: reverse the strings contained in each pair of matching parentheses, starting from the innermost pair and remove parentheses
  if(!s.includes('(')){
    return s;
  }
  
  const howManyParentheses = s.split('(').length - 1;
  
  for(let i=0; i<howManyParentheses; i++){
    s = reverse(s);
  }
  
  function reverse(s){

    const regExp = /\(([^()]*)\)/i;
  
    let reversePart = regExp.exec(s)[1]; //part to reverse 
    
    reversePart = reversePart.split("").reverse().join(""); //reverse process
    
    s = s.replace(regExp, reversePart);
    
    return s;
  }
  
  return s;
}