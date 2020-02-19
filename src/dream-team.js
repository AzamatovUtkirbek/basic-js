module.exports = function createDreamTeam(members) {
  if(members!=null){
    var c=[];
    for(var i=0;i<members.length;i++){
      if(typeof members[i]=="string"){
        c.push(members[i].replace(/^\s+|\s+$/g, '')[0].toUpperCase());
      }
    }
    c.sort();
    if(c==[]){
      return false;
    }else{
      return c.join("");
    }
  }else{
    return false;
  }
};