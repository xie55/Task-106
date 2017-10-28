'use strict';
let object={}; 
let obj={};
let result=[];
module.exports = function countSameElements(collection) {
  for (let i of collection){
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
  return result

}
