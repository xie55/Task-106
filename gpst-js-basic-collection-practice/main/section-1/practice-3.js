'use strict';
let result=[];
let temp=[];
module.exports = function collectSameElements(collectionA, objectB) {
  temp=objectB.value;
  for (let i of collectionA){
    for (let j of temp){
      if (i===j){
        result.push(i)
      }
    }
  }
  return result;
}
