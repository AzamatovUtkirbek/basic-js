const chainMaker = {
  length:0,
  c:[],
  getLength() {
    return this.length;
  },
  addLink(value) {
    this.length++;
    this.c.push(value);
    return this;
  },
  removeLink(position) {
    if(position > this.length || position<=0 || typeof(position)!='number'){
      this.length=0;
      this.c=[];
      throw 'removing wrong link';
    }else{
      position--;
      for(let i=position;i<this.length-1;i++){
        this.c[i]=this.c[i+1];
      }
      this.c.pop();
      this.length--;
    }
    return this;
  },
  reverseChain() {
    this.c=this.c.reverse();
    return this;
  },
  finishChain() {
    let str='';
    for(let i=0;i<this.length;i++){
      str+='( '+this.c[i]+' )~~';
    }
    str=str.slice(0,str.length-2);
    this.c=[];
    this.length=0;
    return str;
  }
};

module.exports = chainMaker;
