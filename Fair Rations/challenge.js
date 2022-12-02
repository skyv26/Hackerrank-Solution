function fairRations(B) {
  let count = 0;
  let i = 0;
​
  while (i < B.length) {
    const num = B[i];
    if (num % 2 === 1) {
    //   increment the current number if it is odd and count it
      B.splice(i, 1, B[i] + 1);
      count++;
      if (B[i + 1]) {
        //   increment the next number and count it as well
        B.splice(i + 1, 1, B[i + 1] + 1);
        count++;
      } else {
        break;
      }
    }
    i++;
  }
  // suppose the original array had only even numbers 
  if(count === 0) return 0
  
//   if the count is even, then it is true, if not it is not
  return count % 2 === 0 ? count : 'NO'
}

console.log(fairRations([4, 5, 7, 8]))