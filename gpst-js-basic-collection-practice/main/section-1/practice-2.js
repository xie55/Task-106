'use strict';
let result=[];
module.exports = function collectSameElements(collectionA, collectionB) {
  for (let i of collectionA){
    for (let j=0;j<collectionB[0].length;j++){
      if (i===collectionB[0][j]){
        result.push(i)
      }
    }
  }
  return result;
}
