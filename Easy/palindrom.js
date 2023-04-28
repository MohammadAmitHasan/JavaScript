const isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    const conStr = x.toString();
    let j=conStr.length-1;
    for(let i=0; i<conStr.length;i++){
        if(conStr[i] !== conStr[j]){
            return false;
        }
        j--;
    }
    return true;
};

const result = isPalindrome(121);
console.log(result);