'use strict';
let result=[]
module.exports = function collectSameElements(collectionA, collectionB) {
  for (let i of collectionA){
    for (let j of collectionB){
      if (i===j){
        result.push(i)
      }
    }
  }
  return result;
}
