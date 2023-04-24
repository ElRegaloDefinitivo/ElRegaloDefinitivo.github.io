const rangeInput = document.querySelector("#range-input");
const initialValue = rangeInput.value;
const rangeInputValueContainer = document.querySelector("#range-input-value");

const setDisplayedValue = (value) => {
  rangeInputValueContainer.innerText = value;
};

setDisplayedValue(initialValue);

rangeInput.addEventListener("input", (e) => {
  setDisplayedValue(e.target.value);
  
  if (e.target.value === "222") {
    window.location.href = "222.html";
  }
  if (e.target.value === "69") {
    window.location.href = "69.html";
  }
  if (e.target.value === "666") {
    window.location.href = "666.html";
  }
});