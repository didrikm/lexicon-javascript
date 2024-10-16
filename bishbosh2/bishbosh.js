let output = document.querySelector("ul");
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let input = document.querySelectorAll("input");
  let x = input[0].value;
  let y = input[1].value;
  let end = input[2].value;
  for (let i = 1; i <= end; i++) {
    if (i % x == 0 && i % y == 0) {
      output.innerHTML += "<li>Bish-Bosh</li>";
    } else if (i % x == 0) {
      output.innerHTML += "<li>Bish</li>";
    } else if (i % y == 0) {
      output.innerHTML += "<li>Bosh</li>";
    } else {
      output.innerHTML += `<li>${i}</li>`;
    }
  }
});
