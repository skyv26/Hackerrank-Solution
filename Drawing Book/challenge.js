function pageCount(n, p) {
  let firstPage = 1;
  let lastPage = n;
  let targetPage = p;
  let frontBookObj = [];
  let pageCount = 0;
  let resultant = [];
  
  frontBookObj.push([firstPage])
  let temp = [];
  for(let num=firstPage+1; num <= lastPage; num++){
      if(temp.length < 2) {
          temp.push(num);
      }
      if(temp.length === 2){
          frontBookObj.push(temp)
          temp = []
      }
  }
  if(lastPage % 2 ===0) {
      frontBookObj.push([lastPage])
  }
  frontBookObj.every((elem, index) => {
      if(elem.includes(targetPage)) {
          return false;
      }
      pageCount+=1;
      return true;
  })
  resultant.push(pageCount)
  pageCount = 0;
  frontBookObj.reverse()
  frontBookObj.every((elem, index) => {
      if(elem.includes(targetPage)) {
          return false;
      }
      pageCount+=1;
      return true;
  })
  resultant.push(pageCount);
  return Math.min(...resultant)
}

console.log(pageCount(8, 4))