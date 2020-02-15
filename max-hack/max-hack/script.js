//detailsite
/*const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (param.has("id")) {
  id = params.get("id");
} else {
  document.location.href = "index.html";
};

const cardsUrl = `http://api.tvmaze.com/schedule`;
const detailUrl = `${cardsUrl}${id}`;
*/

const cardsUrl = `http://api.tvmaze.com/schedule`; //endpoint

fetch(cardsUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    createCard(json);
  })
  .catch(function (error) {
    console.log(error)
  });

function createCard(json) {
  let cardHolder = document.querySelector(".card-holder");
  json.forEach(function (card) {
    console.log(card.show.image.medium);
    let cardDetails = "";

    cardDetails += `
    <div class="card-detail-container">
        <img src="${card.show.image.medium}" alt="card";></div>
          <div class="card-details">
            <h4 class"name">${card.show.name}<h4>
          </div>
          <button></button>
    </div>`

    cardHolder.innerHTML += cardDetails;
  });
}
