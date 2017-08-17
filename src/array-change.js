export default function(inputArray){
    let moves = 0;
    for(let i = 0; i < inputArray.length - 1; i++) {
        if(inputArray[i] >= inputArray[i+1]) {
            const difference = inputArray[i]-inputArray[i+1]+1;
            moves += difference;
            inputArray[i+1] = inputArray[i] + 1;
        }
    }

    return moves;
}