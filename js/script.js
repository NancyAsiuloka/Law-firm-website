const toggle = document.querySelector(".toggle");

const navigation = document.querySelector(".navigation");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
});


function add(a, b) {
  return a + b;
}

let sum = add(2,4)
console.log(sum)