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
      let object={name:cart,summary:count}
      result.push(object)
    }else{
      let object={name:i,summary:obj[i]}
      result.push(object)
    }
  }
  for (let i=0;i<result.length;i++){
    for(let j=i+1;j<result.length;j++){
      if(result[i].name===result[j].name){
        result[i].summary=result[i].summary+result[j].summary
        result.splice(j,1)
        j--;
      }
    }
  }
  return result;
}
