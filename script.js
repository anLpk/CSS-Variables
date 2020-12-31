//console.log("hello from inside");
const controls = document.querySelectorAll(".controls input");
console.log(controls);
// console.log(controls); => NodeList(3) [input#spacing, input#blur, input#base]
function updateValue() {
  // console.log("It is working");
  // console.log(this.name);
  // console.log(this.value);
  // console.log(this);
  // console.log(this.dataset);
  //blur and spacing has px but color does not have any
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

controls.forEach((control) =>
  control.addEventListener("change", updateValue)
);

controls.forEach((control) =>
  control.addEventListener("mousemove", updateValue)
);
