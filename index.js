var myCalButton = document.querySelectorAll(".myButton");
var input = document.getElementById("textBox");
var firstNumber;
var secondNumber;
var operatorForCalculate;
var gVar = "";
const equal = document.querySelector(".myButton2");
equal.addEventListener("click", () => {
  var result;
  if (operatorForCalculate === "+") {
    secondNumber = parseInt(gVar);
    result = firstNumber + secondNumber;
    input.value = result;
    gVar = "";
  } else if (operatorForCalculate === "-") {
    secondNumber = parseInt(gVar);
    result = firstNumber - secondNumber;
    input.value = result;
    gVar = "";
  } else if (operatorForCalculate === "*") {
    secondNumber = parseInt(gVar);
    result = firstNumber * secondNumber;
    input.value = result;
    gVar = "";
  } else if (operatorForCalculate === "/") {
    secondNumber = parseInt(gVar);
    result = firstNumber / secondNumber;
    input.value = result;
    gVar = "";
  } else {
    secondNumber = parseInt(gVar);
    result = firstNumber % secondNumber;
    input.value = result;
    gVar = "";
  }
});

_.each(myCalButton, (val, i, myCalButton) => {
  switch (i) {
    case 0:
      myCalButton[i].addEventListener("click", () => {
        // input.value = "" + 7;
        gVar = gVar + "7";
        input.value = gVar;
      });
      break;
    case 1:
      myCalButton[i].addEventListener("click", () => {
        gVar = gVar + "8";
        input.value = gVar;
      });
      break;
    case 2:
      myCalButton[i].addEventListener("click", () => {
        gVar = gVar + "9";
        input.value = gVar;
      });
      break;
    case 3:
      myCalButton[i].addEventListener("click", () => {
        gVar = gVar + "4";
        input.value = gVar;
      });
      break;
    case 4:
      myCalButton[i].addEventListener("click", () => {
        gVar = gVar + "5";
        input.value = gVar;
      });
      break;
    case 5:
      myCalButton[i].addEventListener("click", () => {
        gVar = gVar + "6";
        input.value = gVar;
      });
      break;
    case 6:
      myCalButton[i].addEventListener("click", () => {
        gVar = gVar + "3";
        input.value = gVar;
      });
      break;
    case 7:
      myCalButton[i].addEventListener("click", () => {
        gVar = gVar + "2";
        input.value = gVar;
      });
      break;
    default:
      myCalButton[i].addEventListener("click", () => {
        gVar = gVar + "1";
        input.value = gVar;
      });
      break;
  }
});
var operators = document.querySelectorAll(".myButton1");
_.each(operators, (val, i, operators) => {
  switch (i) {
    case 0:
      operators[i].addEventListener("click", () => {
        firstNumber = parseInt(input.value);
        operatorForCalculate = "+";
        input.value = operatorForCalculate;
        gVar = "";
      });
      break;
    case 1:
      operators[i].addEventListener("click", () => {
        firstNumber = parseInt(input.value);
        operatorForCalculate = "-";
        input.value = operatorForCalculate;
        gVar = "";
      });
      break;
    case 2:
      operators[i].addEventListener("click", () => {
        firstNumber = parseInt(input.value);
        operatorForCalculate = "*";
        input.value = operatorForCalculate;
        gVar = "";
      });
      break;
    case 3:
      operators[i].addEventListener("click", () => {
        firstNumber = parseInt(input.value);
        operatorForCalculate = "/";
        input.value = operatorForCalculate;
        gVar = "";
      });
      break;
    case 4:
      operators[i].addEventListener("click", () => {
        firstNumber = parseInt(input.value);
        operatorForCalculate = "%";
        input.value = operatorForCalculate;
        gVar = "";
      });
      break;
    default:
      operators[i].addEventListener("click", () => {
        firstNumber = parseInt(input.value);
        input.value = "0";
        gVar = "";
      });
  }
});
// if (i === 0) {

//     break;
// } else if(i === 1) {
//     document.addEventListener("click",()=> {
//         console.log(myCalButton[i]);
//     });
//     break;
// } else if(i === 2) {
//     document.addEventListener("click",()=> {
//         console.log(myCalButton[i]);
//     });
//     break;
// } else if(i === 3) {
//     document.addEventListener("click",()=> {
//         console.log(myCalButton[i]);
//     });
//     break;
// } else if(i === 4) {
//     document.addEventListener("click",()=> {
//         console.log(myCalButton[i]);
//     });
//     break;
// } else if(i === 5) {
//     document.addEventListener("click",()=> {
//         console.log(myCalButton[i]);
//     });
//     break;
// } else if(i === 6) {
//     document.addEventListener("click",()=> {
//         console.log(myCalButton[i]);
//     });
//     break;
// } else if(i === 7) {
//     document.addEventListener("click",()=> {
//         console.log(myCalButton[i]);
//     });
//     break;
// } else if(i === 8) {
//     document.addEventListener("click",()=> {
//         console.log(myCalButton[i]);
//     });
//     break;
// }
