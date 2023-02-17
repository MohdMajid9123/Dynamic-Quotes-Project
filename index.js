//target button
const btnEl = document.querySelector("#btn");
//target quote
const quoteEl = document.querySelector("#quotes");
//target author
const authorEl = document.querySelector("#author");

//btnEl event and arrow function
btnEl.addEventListener("click", () => {
  fetch("https://type.fit/api/quotes")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //create random number
      let rNumber = Math.round(Math.random() * 500);
      //insert data in text
      quoteEl.innerText = `${data[rNumber].text}`;
      //ternary oprator
      data[rNumber].author == null
        ? (authorEl.innerText = "By unknown")
        : (authorEl.innerText = `By ${data[rNumber].author}`);
    })
    .catch((ero) => console.log("we get an error"));
});
