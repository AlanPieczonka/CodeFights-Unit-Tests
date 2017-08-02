export default function(a) {

  let teamOdd = 0;
  let teamEven = 0;
  
  a.forEach((element, index) => {
    if(index % 2 === 0){
      teamEven+=element;
    }else{
      teamOdd+=element;
    }  
  });
    
  const finalArray = [teamEven, teamOdd];

  return finalArray;
}
