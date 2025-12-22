/* 1. Function Name: calculateSum */
function calculateSum(a, b) { 
    return a + b;
}
calculateSum(2, 3);
console.log(calculateSum(2, 3));

/* 2. Function Name: isEven */
function isEven(numb) { 
    if (numb % 2 === 0) {
        return true;
    } 
    else {
        return false;
    }
}
isEven(11);
console.log(isEven(11));

/* 3. Function Name: findMax array */
function findMax(arrey) { 
    let max = arrey[0];
    for (let i = 1; i < arrey.length; i = i + 1) {
        if (arrey[i] > max) {
            max = arrey[i];
        }
    }
    return max;
}
findMax([1, 5, 9, 10, 12, 15]);
console.log(findMax([1, 5, 9, 10, 12, 15]));

/* 4. Function Name: filterOddNumbers */
function filterOddNumbers(numb) {
    let odd = [];
    for (let i = 0; i < numb.length; i = i + 1) {
        if (numb[i] % 2 !== 0) {
            odd.push(numb[i]);
        }
    }
    return odd;
}
filterOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(filterOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));


/* 5 . Function Name: countWords */
function countWords(sentence) {
    let words = sentence.split(' ');
    return words.length;
}
countWords("I want to earn $4000 per month");
console.log(countWords("I want to earn $4000 per month"));

/* 6. Function Name: removeDuplicates */
function removeDuplicates(arr) {
    let remDup = [];
    for (let i = 0; i < arr.length; i = i + 1) {
        if (!remDup.includes(arr[i])) {
            remDup.push(arr[i]);
        }
    }
    return remDup;
}
removeDuplicates([1, 1, 2, 3, 3, 4, 5, 5, 6]);
console.log(removeDuplicates([1, 1, 2, 3, 3, 4, 5, 5, 6]));