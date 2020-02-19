module.exports = function transform(arr) {
    if(Array.isArray(arr)){
        var c=[];
        if(arr.length>0){
            for(var i=0;i<arr.length;i++){
                if(arr[i]=="--discard-next"){
                    i++;
                }else if(arr[i]=="--discard-prev"){
                    c.pop();
                }else if(arr[i]=="--double-next"){
                    if(i+1<arr.length){
                        c.push(arr[i+1]);
                    }
                }else if(arr[i]=="--double-prev"){
                    if(i>0){
                        c.push(arr[i-1]);
                    }
                }else{
                    c.push(arr[i]);
                }
            }
        }
        return c;
    }else{
        throw Error;
    }
};
