const repeatString = function(string, num) {
    let out = string;
    for(let i = 1; i < num; i++){
        out = out.concat("", string);
    }return out;
};

// Do not edit below this line
module.exports = repeatString;
