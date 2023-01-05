function birthdayCakeCandles(candles) {
  // Write your code here
  let newSet = {};
  candles.forEach((elem) => {
      newSet[elem]=0;
  })
  candles.forEach((elem) => {
      if(newSet.hasOwnProperty(elem)) {
          newSet[elem]+=1;
      }
  })
  
  return Math.max(...Object.values(newSet));
}

console.log(birthdayCakeCandles([4,4,1,2]))