const isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    const conStr = x.toString();
    let j=conStr.length-1;
    for(let i=0; i<conStr.length/2;i++){
        if(conStr[i] !== conStr[j]){
            return false;
        }
        j--;
    }
    return true;
};


const kthPalindrome = function(queries, intLength) {
    let palindromes = [];
    let selectedP=[];
    const smallestNumber = Math.pow(10, intLength-1);
    const largestNumber = Math.pow(10, intLength) - 1;

    for(let i=smallestNumber ;i<=largestNumber; i++){
        const pal = isPalindrome(i);
        if(pal){
            palindromes.push(i);
        }
    }
    for(let j=0;j<queries.length;j++){
        if(palindromes[queries[j]-1]){
            selectedP.push(palindromes[queries[j]-1]);
        }
        else
        {
            selectedP.push(-1);
        }
    }
    return selectedP;
};