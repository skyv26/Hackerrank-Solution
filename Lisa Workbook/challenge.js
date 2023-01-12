function workbook(n, k, arr) { 
  let special = 0; 
  let page = 1; 
  for (let i = 0; i < arr.length; i++) { 
    let problems = arr[i]; 
    let problem = 1; 
    while (problem <= problems) { 
      if (problem === page) { 
        special++; 
      } 
      if (problem % k === 0 || problem === problems) { 
        page++; 
      } 
      problem++; 
    } 
  } 
  return special; 
}

console.log(workbook(5, 3, [4, 2, 6, 1, 10]));
// 4