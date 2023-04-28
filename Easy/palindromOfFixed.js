// const isPalindrome = function(x) {
//     if(x<0){
//         return false;
//     }
//     const conStr = x.toString();
//     let j=conStr.length-1;
//     for(let i=0; i<conStr.length/2;i++){
//         if(conStr[i] !== conStr[j]){
//             return false;
//         }
//         j--;
//     }
//     return true;
// };


// const kthPalindrome = function(queries, intLength) {
//     let palindromes = [];
//     let selectedP=[];
//     const smallestNumber = Math.pow(10, intLength-1);
//     const largestNumber = Math.pow(10, intLength) - 1;

//     for(let i=smallestNumber ;i<=largestNumber; i++){
//         const pal = isPalindrome(i);
//         if(pal){
//             palindromes.push(i);
//         }
//     }
//     for(let j=0;j<queries.length;j++){
//         if(palindromes[queries[j]-1]){
//             selectedP.push(palindromes[queries[j]-1]);
//         }
//         else
//         {
//             selectedP.push(-1);
//         }
//     }
//     return selectedP;
// };

var kthPalindrome = function (queries, len) {
    let lenAboutHalf = Math.pow(10, Math.ceil(len / 2) - 1);           // either half len +1 (odd length palindrome) or 1 less (for even length palindrome)

    let ans = [];
    for (let nth of queries) {
 
        let first = lenAboutHalf + (nth - 1) + "";                     // first half of palindrome
        let n = first.length;
        
        let second = "";                                               // second half of palindrome (first half reverse)

        for (let i = n - 1 - (len % 2); i >= 0; i--) {
            second = second + first[i];
        }

        let s = first + second;                                        // full palindrome
        
        if (s.length > len) {
            ans.push(-1);                                              // found to be not possible
        } else {
            ans.push(+s);
        }
    }

    return ans;
};

const result = kthPalindrome([90], 3);
console.log(result);