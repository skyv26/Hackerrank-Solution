function staircase(n) {    
  let newStr = '';
  for(let iter = 0; iter < n; iter++) {
    for (let spaces = 0; spaces < (n - (iter + 1)); spaces++) {
      newStr += ' ';
    }
    for (let hashes = 0; hashes <= iter; hashes++) {
      newStr += '#'; 
    }
    newStr += '\n';
  }
  console.log(newStr);
}

console.log("Print the staircase of 4")
staircase(4)

console.log("Print the staircase of 6")
staircase(6)

console.log("Print the staircase of 9")
staircase(9);
