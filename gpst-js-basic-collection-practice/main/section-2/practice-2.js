'use strict';

module.exports = function countSameElements(collection) {
  let result=[] , obj={}  
  for (let i of collection){
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
  return result
}
