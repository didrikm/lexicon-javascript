document.querySelector("button").addEventListener("click", () => {
  document.querySelector("div").innerHTML = "";
  const request = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";
  fetch(request)
    .then((res) => res.json())
    .then((data) => {
      const img = document.createElement("img");
      img.setAttribute("src", data.cards[0].image);
      document.querySelector("div").appendChild(img);
    })
    .catch((err) => console.log(err));
});
