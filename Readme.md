#  ***JavaScript***
![Js](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/960px-JavaScript-logo.png)
## 🗓️ Lecture structure

- **Conditions**
- **Loops**
- **functions**

---

## 🧠 JavaScript Conditional Statements / if-else
- ✅ **Use if to specify a block of code to be executed, if a specified condition is true**
- 🔄 **Use else if to specify a new condition to test, if the first condition is false**
- ❌ **Use else to specify a block of code to be executed, if the same condition is false**

## 🧪 **Example :**

``` Js
if (condition1) {
  // block of code to be executed if condition1 is true
} else if (condition2) {
  // block of code to be executed if condition1 is false and condition2 is true
} else {
  // block of code to be executed if condition1 is false and condition2 is false
}

```
---
## Condition Ternary Operator
### **An alternative to the if/else statement, the ternary operator allows JavaScript developers to write concise conditional statements.**
- **A logical condition**
- **A value to return if true**
- **A value to return if false**
- **The ternary operator is a simplified conditional operator like if / else.**

## 🧪 **Example :**
``` js
    let a = 2 > 3 ?  'test is true' : 'test is false'
```

---
## 🔄 **Condition: Switch Case**
### **The switch statement evaluates an expression, matching the expression's value against a series of case clauses, and executes statements after the first matching case until a break is encountered.**.
## 🧩 **Key Points**
- **The switch expression is evaluated once.**
- **The value is compared with each case.**
- **If there's a match, the associated block runs.**
- **If no match, the default block runs.**

## 🧪 **Example :**

``` Js
let trueTest = 15;

switch (trueTest) {
  case 15:
    console.log("15 is 15");
    break;
  case 20:
    console.log("20 is not 15");
    break;
  default:
    console.log("You are not 15 or 20");
    break;
}
```
---
## 🔁 **Loop: for**
### **The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block) to be executed in the loop.**

## 🧠 **How It Works**
- **The loop starts by declaring the variable i and initializing it to 0.**
- **It checks that i is less than 9.**
- **If true, it executes the loop body.**
- **After each pass, it increments i by 1.**

## 🧪 **Example :**

``` js
let str = "";
let cnt = 0;

for (let i = 0; i < 9; i++) {
  str += i;
  cnt++;
}

console.log(str); // 012345678
console.log(cnt); // 9
```

---

## **Loop while**

## 🌀 **Description**
### **The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement. The following while loop iterates as long as n is less than three.**

## 💡 **Note**
- **Use the break statement to stop a loop before the condition evaluates to true.**

## 🧪 **Example :**

``` Js
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
  console.log(n);
  console.log(x);
}
```

---

## **Loop do-while**
### **The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false.**

## **Unlike the while loop, the do...while loop evaluates the condition after executing the statement, which guarantees that the statement runs at least once.**

## 🧪 **Example :**

``` Js
let result = " "
let i = 0

do {
  i++;
  result += i;
}while (i < 5)

console.log(result); //'12345'
```

---

## 🧠 **lectures goal**

- **how to use three types of conditions**
- **how to use three types of Loops**
- **how to use three types of Functions**

---

## 🛠️ **resurce**

- [**Js-lecture-2**](https://www.canva.com/design/DAGVRMGhGek/BBk6e7-80rD60KOpBBjCUg/view?utm_content=DAGVRMGhGek&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h91b895d73d#2)