'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let result=[] , obj={}
  for (let i of collectionA){
    if (!obj[i]){
      obj[i]=1
    }else {
      obj[i]++
    }
  }
  for (let i in obj){
    let object={key:i,count:obj[i]}
    result.push(object)
  }
  let arr=objectB.value
  for (let i=0;i<result.length;i++){
    for (let j of arr){
      if (result[i].key===j){
        result[i].count-=parseInt(result[i].count/3)
      }
    }
  }
  return result
}
