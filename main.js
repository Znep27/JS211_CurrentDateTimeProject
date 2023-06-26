// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const numberToString = (num) => {
  let text = num.toString();
  return text;
}


// Write a JavaScript program to convert a string to the number.
const stringToNumber = (string1) => {
  let number = parseInt(string1);
  return number;
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
const thingCheck = document.getElementById('checkThings');
thingCheck.addEventListener("submit", e => {
  e.preventDefault()
  let thing1 = document.getElementById("first-Value").value;
  let thing2 = document.getElementById("second-Value").value;
  if (!isNaN(thing1)) {
    thing1 = stringToNumber(thing1)
  } else {
    thing1 = bool(thing1)
  }
  if (!isNaN(thing2)) {
    thing2 = stringToNumber(thing2)
  } else {
    thing2 = bool(thing2)
  }
  document.getElementById("checked").innerHTML = `<br>${thing1} is a ${typeof thing1}, ${thing2} is a ${typeof thing2}.`;
  bothTrue(thing1, thing2)
  neitherTrue(thing1, thing2)
});
  

  
// Write a JavaScript program that adds 2 numbers together.
const add1 = (number1, number2) => {
  let answer = number1 + number2;
  document.getElementById("answers").innerHTML = `The sum of ${number1} + ${number2} is ${answer}.<br><br>`;
  return answer;
}
const subtract1 = (number1, number2) => {
  let answer = number1 - number2;
  document.getElementById("answers").innerHTML = `The difference of ${number1} - ${number2} is ${answer}.<br><br>`;
  return answer;
}
const multiply1 = (number1, number2) => {
  let answer = number1 * number2;
  document.getElementById("answers").innerHTML = `The product of ${number1} x ${number2} is ${answer}.<br><br>`;
  return answer;
}
const divide1 = (number1, number2) => {
  let answer = number1 / number2;
  document.getElementById("answers").innerHTML = `The quotient of ${number1} / ${number2} is ${answer}.<br><br>`;
  return answer;
}

const bool = (things) => {
  let thingy = things;
  if (thingy === "true") {
    thingy = true;
  } else if (thingy === "false") {
    thingy = false;
  }
  return thingy;
}

const calculate = document.getElementById('calculateNumbers');
calculate.addEventListener("submit", e => {
  e.preventDefault()
  const num1 = document.getElementById("first-Number").value;
  const num2 = document.getElementById("second-Number").value;
  const operation = document.getElementById("operation").value;
  if (operation === 'add') {
    add1(stringToNumber(num1), stringToNumber(num2));
  } else if (operation === 'subtract') {
    subtract1(stringToNumber(num1), stringToNumber(num2));
  } else if (operation === 'multiply') {
    multiply1(stringToNumber(num1), stringToNumber(num2));
  } else {
    divide1(stringToNumber(num1), stringToNumber(num2));
  }
});
  


// Write a JavaScript program that runs only when 2 things are true.
const bothTrue = (thing1, thing2) => {
  if (thing1 && thing2) {
    console.log(thing1 + ' and ' + thing2 + ' are both true');
    document.getElementById("trueOrFalse").innerHTML = `${thing1} and ${thing2} are both truthy.`;
  } else {
    oneTrue(thing1, thing2)
  }
}


// Write a JavaScript program that runs when 1 of 2 things are true.
const oneTrue = (thing1, thing2) => {
  if (thing1 || thing2) {
    if(thing1) {
      console.log(thing1 + ' is true');
      document.getElementById("trueOrFalse").innerHTML = `${thing1} is truthy, ${thing2} is falsey.`;
    } else {
      console.log(thing2 + ' is true.')
      document.getElementById("trueOrFalse").innerHTML = `${thing1} is falsey, ${thing2} is truthy.`;
    }
   }
}


// Write a JavaScript program that runs when both things are not true.  
const neitherTrue = (thing1, thing2) => {
  if (!thing1 && !thing2) {
    console.log('neither is true');
    document.getElementById("trueOrFalse").innerHTML = `Both ${thing1} and ${thing2} are falsey.`;
  }
}
// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
