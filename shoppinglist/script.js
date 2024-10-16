const output = document.querySelector("#output");
const input = document.querySelector("input");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const div = document.createElement("div");
    div.classList.add("btn-group");
    div.setAttribute("role", "group");

    const button1 = document.createElement("button");
    button1.type = "button";
    button1.classList.add("btn", "btn-dark");
    button1.textContent = input.value;

    let isModified = false;
    button1.addEventListener("click", () => {
      if (isModified) {
        button1.style.color = "";
        button1.style.textDecoration = "";
      } else {
        button1.style.color = "green";
        button1.style.textDecoration = "line-through";
      }
      isModified = !isModified;
    });

    const button2 = document.createElement("button");
    button2.type = "button";
    button2.classList.add("btn", "btn-dark");
    button2.innerHTML = `&#x2715;`;
    button2.addEventListener("click", () => {
      div.parentNode.removeChild(div);
    });

    div.appendChild(button1);
    div.appendChild(button2);

    output.appendChild(div);

    input.value = "";
  }
});
