"use strict";

// constant variables for input values
const billInputValue = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const customValue = document.querySelector(".custom");

// button variables
const allButtons = document.querySelector(".tip-buttons");
const Btn1 = document.querySelector(".five");
const Btn2 = document.querySelector(".ten");
const Btn3 = document.querySelector(".fifteen");
const Btn4 = document.querySelector(".twenty-five");
const Btn5 = document.querySelector(".fifty");
const Btns = document.querySelectorAll("#button1");
const resetButton = document.querySelector(".reset");

// cant be zero alerts
const alert1 = document.querySelector(".alert-1");
const alert2 = document.querySelector(".alert-2");

// display calculation results
let totalDisplay = document.querySelector(".amount-2");
let tipDisplay = document.querySelector(".amount");

// function which calclulates outputs according to buttons
const calculateResults = function (button, percent) {
  button.addEventListener("click", () => {
    if (Number(billInputValue.value) !== 0 && Number(peopleInput.value) !== 0) {
      let firstInput = Number(billInputValue.value);
      let secondInput = Number(peopleInput.value);
      let tipAmount = (firstInput * percent) / 100 / secondInput;
      let totalAmount =
        (firstInput + (firstInput * percent) / 100) / secondInput;
      console.log(tipAmount);
      console.log(totalAmount);
      totalDisplay.textContent = `$${Math.round(totalAmount * 100) / 100}`;
      tipDisplay.textContent = `$${Math.round(tipAmount * 100) / 100}`;
    }
  });
};
calculateResults(Btn1, 5);
calculateResults(Btn2, 10);
calculateResults(Btn3, 15);
calculateResults(Btn4, 25);
calculateResults(Btn5, 50);

// display alerts
Btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (Number(billInputValue.value) === 0) {
      alert1.style.display = "block";
    } else {
      alert1.style.display = "none";
    }
    if (Number(peopleInput.value) === 0) {
      alert2.style.display = "block";
    } else {
      alert2.style.display = "none";
    }
  });
});

//reset
resetButton.addEventListener("click", () => {
  totalDisplay.textContent = `$0.00`;
  tipDisplay.textContent = `$0.00`;
  billInputValue.value = "";
  peopleInput.value = "";
  alert1.style.display = "none";
  alert2.style.display = "none";
  customValue.value = "";
});

// custom value calculation
customValue.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    if (Number(billInputValue.value) !== 0 && Number(peopleInput.value) !== 0) {
      let custom = Number(customValue.value);
      let firstInput = Number(billInputValue.value);
      let secondInput = Number(peopleInput.value);
      let tipAmount = (firstInput * custom) / 100 / secondInput;
      let totalAmount =
        (firstInput + (firstInput * custom) / 100) / secondInput;
      totalDisplay.textContent = `$${Math.round(totalAmount * 100) / 100}`;
      tipDisplay.textContent = `$${Math.round(tipAmount * 100) / 100}`;
    }
    if (Number(billInputValue.value) === 0) {
      alert1.style.display = "block";
    } else {
      alert1.style.display = "none";
    }
    if (Number(peopleInput.value) === 0) {
      alert2.style.display = "block";
    } else {
      alert2.style.display = "none";
    }
  }
});
