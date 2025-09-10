// Task 1

//let makesTen = function (a, b){
//    return a == 10 || b == 10 || a+b == 10;
//}
//console.log(makesTen (9, 10));
//console.log(makesTen (9, 9));
//console.log(makesTen (1, 9));

// Task 2

//function sumOfPrime (a, b){
//    let cnt = 0;
//    for (let i = 2; i<a+b; i++){
//        if((a+b)%i == 0){
//            cnt++;
//        }
//    }
//    return cnt == 0;
//}
//console.log(sumOfPrime (5, 7));
//console.log(sumOfPrime (2, 9));

// Task 3

//function fibonacciIterative(n) {
//   if (n <= 1) return n;
//   let prev = 0, curr = 1;
//   for (let i = 2; i <= n; i++) {
//     let next = prev + curr;
//     prev = curr;
//     curr = next;
//   }
//   return curr;
// }
// console.log(fibonacciIterative(8));
// console.log(fibonacciIterative(5));

// Task 4 

//let calculateExponent = function (a, b) {
//    a = Math.pow(a, b)
//    return a;
//}
//console.log(calculateExponent (5, 5));
//console.log(calculateExponent (10, 10));

// Task 5

//function largestSwap (a){
//    return a>a%10*10 + Math.floor (a/10);
//}
//console.log(largestSwap (27));
//console.log(largestSwap (43));

// Task 6

//function primeInRange (a, b){
//    let primeInRangeCnt = 0;
//    for (let i = a; i<=b; i++) {
//        primeInRangeCnt = 0;
//        for (let j = 2; j<i; j++) {
//            if (i%j == 0){
//                primeInRangeCnt++;
//            }
//        }
//        if (primeInRangeCnt == 0) {
//            return "true";
//        }
//    }
//    return "false";
//}
//console.log(primeInRange (10, 15));
//console.log(primeInRange (62, 66));

// Task 7

//function numbersSquares (a){
//    let numbersSquaresCnt = 0;
//    for (let i = 1;i <= a;i++){
//        numbersSquaresCnt += Math.pow (i, 2);
//    }
//    return numbersSquaresCnt;
//}
//console.log(numbersSquares (2));
//console.log(numbersSquares (4));

// Task 8

//function solveExp (a, b){
//    for (let i = 2; i<b; i++){
//        if(Math.pow (a, i) == b){
//            return i;
//        }
//    }
//}
//console.log(solveExp (4, 1024));
//console.log(solveExp (2, 1024));

// Task 9

//let gcd = function (a, b){
//    for (let i = a; i>0; i--){
//        if (a%i == 0 && b%i == 0){
//            return i;
//        }
//    }
//    for (let i = b;i>0;i--){
//        if (a%i == 0 && b%i == 0){
//            return i;
//        }
//    }
//}
//console.log(gcd (3, 5));
//console.log(gcd (14, 28));

// Task 10

//function isIncreasingArithmeticSequence (a){
//    let rev = 0;
//    let last = 0;
//    let last0 = Math.floor(a/4)
//    let i = a;
//    while (i > 0){
//        rev = rev*10 + i%10;
//        i = Math.floor (i/10)
//    }
//    let j = rev;
//    while (j > 0){
//        if (rev%10 != last+last0){
//            return "false";
//        }
//        else {
//            last = rev%10;
//        }
//        j = Math.floor (j/10)
//    }
//    return "True"
//}
//console.log(isIncreasingArithmeticSequence (2468));

// Task 11

//function factorial (a){
//    let factorialCnt = 1;
//    for (let i = 1;i<=a;i++){
//        factorialCnt *= i;
//    }
//    return factorialCnt;
//}
//console.log(factorial (5));
//console.log(factorial (4));

// Task 12

//function sumOfNumbers (a){
//    let sumOfNumbersCnt = 0;
//    let i = a;
//    while (i > 0){
//        sumOfNumbersCnt += i%10;
//        i = Math.floor(i/10);
//    }
//    return sumOfNumbersCnt
//}
//console.log(sumOfNumbers (12345));
//console.log(sumOfNumbers (4359));

// Task 13

//function nTablesPlusOne (a){
//    let nTablesPlusOneCnt = "";
//    for (let i = 1;i<=10;i++){
//        nTablesPlusOneCnt += a*i+1;
//        if (i<10){
//        nTablesPlusOneCnt += ","
//        }
//    }
//    return nTablesPlusOneCnt;
//}
//console.log(nTablesPlusOne (7));
//console.log(nTablesPlusOne (1));

// task 14

// function palindrome(a) {
    // let rev=0
    // for (let i = a; i>0; i=Math.floor(i/10)) {
        // rev = rev *10 + i % 10        
        // for (let i=2; i<a; i++)
        // {
            // if (a % i == 0) {
                // return false
            // }
        // }
        // return true
    // }
    // 
// }
// console.log(palindrome(131));
// console.log(palindrome(122));


// task 15 

// function calculateFuel(a) {
// return a*10  
// }
// console.log(calculateFuel(15));
// console.log(calculateFuel(23.5));
// console.log(calculateFuel(3));