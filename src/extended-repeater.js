module.exports = function repeater(str, options) {
    if(typeof str == "string"){
        var tekst=str;
    }else{
        var tekst=str+'';
    }
    if("addition" in options){
        if(typeof options["addition"] == "string"){
            var addtekst=options["addition"];
        }else{
            var addtekst=options["addition"]+'';
        }
    }else{
        var addteskt='';
    }
    if("repeatTimes" in options){
        if(typeof options["repeatTimes"] == "number"){
            var repeatTimes=options["repeatTimes"];
        }else{
            var repeatTimes=1;    
        }
    }else{
        var repeatTimes=1;
    }
    if("additionRepeatTimes" in options){
        if(typeof options["additionRepeatTimes"] == "number"){
            var additionRepeatTimes=options["additionRepeatTimes"];
        }else{
            var additionRepeatTimes=1;    
        }
    }else{
        var additionRepeatTimes=1;
    }
    if("separator" in options){
        var separator=options["separator"];
    }else{
        var separator="+";
    }
    if("additionSeparator" in options){
        var additionSeparator=options["additionSeparator"];
    }else{
        var additionSeparator="|";
    }
    var c=[];
    for(let i=0;i<repeatTimes;i++){
        let d=[];
        for(let j=0;j<additionRepeatTimes;j++){
            d.push(addtekst);
        }
        c.push(tekst+d.join(additionSeparator));
    }
    return c.join(separator);
};
  