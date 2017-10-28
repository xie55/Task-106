'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let result=[] , obj={}  
  for (let i of collectionA){
    if (!obj[i]){
      obj[i]=1;
    }else {
      obj[i]++;
    }
  }
  for (let i in obj){
    if (i.length>1){
      let count = parseInt(i.slice(2))
      let cart = i.slice(0,1)
      let object={key:cart,count:count}
      result.push(object)
    }else{
      let object={key:i,count:obj[i]}
      result.push(object)
    }
  }
  for (let i=0;i<result.length;i++){
    for (let j of objectB.value){
      if (result[i].key===j){
        result[i].count-=parseInt(result[i].count/3)
      }
    }
  }
  return result
}
