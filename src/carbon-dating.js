const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity=="string"){
    if(sampleActivity==null){
      return false;
    }else{
      if(sampleActivity.match(/^(?!,$)[\d,.]+$/g)){
        sampleActivity=sampleActivity.replace(/(\..*)\./g, '$1');
        if(sampleActivity>15||sampleActivity<=0){
          return false;
        }else{
          return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/(0.693/HALF_LIFE_PERIOD));
        }
      }else{
        return false;
      }
    }
  }else{
    return false;
  }
};
