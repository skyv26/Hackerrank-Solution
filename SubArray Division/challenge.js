function birthday(s, d, m) {
  // Write your code here
  let nums = [];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let arrayElement = s.slice(0 + i, m + i);
    nums.push(arrayElement);
  }
  if(s.length===1 && s[0]===d){
      count++;
  }else{
    nums.forEach((el) => {
        if (d === el.reduce((a, b) => a + b, 0)) {
          count++;
        }
      });
  }
  

  return count;
}
console.log(birthday([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7));
// console.log(birthday([4], 4, 1));