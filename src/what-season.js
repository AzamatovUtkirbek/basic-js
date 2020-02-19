module.exports = function getSeason(date) {
  if(date==null){
    return("Unable to determine the time of year!");
  }else{
    if(Object.prototype.toString.call(date) === "[object Date]"){
      var n=date.getMonth();
      if(((n<2)||(n>10))&&(n<12)){
        return("winter");
      }else if((n>1)&&(n<5)){
        return("spring");
      }else if((n>4)&&(n<8)){
        return("summer");
      }else if((n>7)&&(n<11)){
        return("autumn");
      }else{
        throw Error;
      }
    }else{
      throw Error;
    }
  }
};
