'use strict';
let result=[];
let temp=[];
module.exports = function collectSameElements(collectionA, objectB) {
  temp=objectB.value;
  for (let i=0 ;i<collectionA.length; i++){
    for (let j of temp){
      if (collectionA[i].key===j){
        result.push(j)
      }
    }
  }
  return result;
}
