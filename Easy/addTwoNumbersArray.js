const addTwoNumbers = function(l1, l2) {
    let firstNumber=0, secondNumber=0, myCount=1;
    for(let i=0; i<l1.length;i++){
        firstNumber = firstNumber+ l1[i] * myCount;
        myCount*=10;
    }
    myCount=1;
    for(let i=0; i<l2.length;i++){
        secondNumber = secondNumber+ l2[i] * myCount;
        myCount*=10;
    }

    let sum = firstNumber + secondNumber;
    let resultArray = [];
    while(sum>0){
        resultArray.push(sum%10);
        sum = parseInt(sum / 10);
    }
    if(resultArray.length === 0){
        return [0];
    }
    return resultArray;
};

const result = addTwoNumbers([0], [0])
console.log(result);