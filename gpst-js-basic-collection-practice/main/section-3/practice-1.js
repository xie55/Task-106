'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let result=[]; let arr=objectB.value
  for (let i=0;i<collectionA.length;i++){
    for (let j=0;j<arr.length;j++){
      if(collectionA[i].key===arr[j]){
        collectionA[i].count--
      }
    }
  }
  return collectionA;
}
