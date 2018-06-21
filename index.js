function chunkArrayInGroups(arr, size) {
  let copArr = arr;
  let newArr = [];
  let arrNums = Math.floor(copArr.length/size);
  
  for(let i = 0; i < arrNums; i++) {
    newArr[i] = [];
    for (let j = 0; j < size; j++) { 
      newArr[i][j] = arr.shift();
    }
  }
  if (arr.length%size != 0) {
    newArr.push(copArr);;
  } 
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
