function compareTriplets(a, b) {
  // Write your code here
  let AlicePoint=0, BobPoint=0;
  for(let start=0; start<a.length; start++){
      if(a[start] === b[start]){
          continue;
      }        
      a[start] > b[start] ? AlicePoint++ : BobPoint++;
  }
  return [AlicePoint, BobPoint]

}

/*
  5 6 7
  3 6 10
*/
console.log(...compareTriplets([5,6,7], [3,6,10]))

/*
  17 28 30
  99 16 8
 */
console.log(...compareTriplets([17,28,30], [99,16,8]))