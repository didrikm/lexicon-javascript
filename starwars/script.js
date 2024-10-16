document.querySelector("button").addEventListener("click", () => {
  const request = `https://www.swapi.tech/api/people/?name=${
    document.querySelector("input").value
  }`;
  fetch(request)
    .then((res) => res.json())
    .then((data) => {
      const info = data.result[0].properties;
      console.dir(info);
      document.querySelector(
        "#output"
      ).innerHTML = `Name: ${info.name}\nGender: ${info.gender}\nBirth year: ${info.birth_year}\nHeight: ${info.height}\nWeigth: ${info.mass}`;
    })
    .catch((err) => {
      console.log(err);
      document.querySelector("#output").innerHTML =
        "This is not the droid you're looking for.";
    });
});
