const apiURL = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
const containerCards = document.querySelector("#cards");
let array = [];

async function fetchCards(){
    const response = await fetch(apiURL);
    return await response.json();
}

function renderCards(cards){
    containerCards.innerHTML = "";
    cards.map(renderCard);
}

function renderCard(card) {
    const div = document.createElement("div");
    div.style.width = "300px";
    div.style.margin = "30px";
    div.className = "card";
    div.innerHTML = `
    <img src="${card.photo}" class="card-img-top" alt="${card.name}" />
    <div class="card-body">
        <h4 class="card-text"> ${card.property_type} </h4>
        <p class="card-title"> Local: <b class="local-price"> ${card.name} </b> </p>
        <p class="card-text"> Pernoite: <b class="local-price"> R$${card.price},00 </b> </p>
    </div>
    `;
    containerCards.appendChild(div);
}

async function main(){
    array = await fetchCards();
    if (array[0]) {
        renderCards(array);
    }
}

main();

