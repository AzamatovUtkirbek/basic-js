module.exports = function countCats(backyard) {
  if(backyard===[]){
    return 0;
  }else{
    var sum=0;
    for(var i=0;i<backyard.length;i++){
      for(var j=0;j<backyard[0].length;j++){
        if(backyard[i][j]==="^^"){
          sum+=1;
        }
      }
    }
    return sum;
  }
};
