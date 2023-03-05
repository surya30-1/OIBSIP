let result = document.querySelector("input");
let button = Array.from(document.querySelectorAll("button"));

button.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (this.innerHTML === "=") {
      result.value = eval(result.value);
    } else if (this.innerHTML === "C") {
      result.value = "";
    } else if (this.innerHTML === "CE") {
      result.value = result.value.slice(0, -1);
    } else {
      result.value += this.innerHTML;
    }
  });
});
