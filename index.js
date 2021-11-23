// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

console.log(data);

const ulEl = document.querySelector(".cards");

const card_1 = createCard(data[0]);
const card_2 = createCard(data[1]);
const card_3 = createCard(data[2]);
const card_4 = createCard(data[3]);
const card_5 = createCard(data[4]);
const card_6 = createCard(data[5]);



ulEl.append(card_1,card_2,card_3,card_4,card_5,card_6);

function createCard(data){
    const card = document.createElement("li");
    card.setAttribute("class","card");

    //Create h2 title inside the card
    const cardH2El = createCardTitle(data);

    //Create img inside the card
    const cardImgEl = createCardImage(data);

    //Create list elements inside the card

    const cardUlEl = createCardList(data);
    const gamesUl = displayGames(data);
    card.append(cardH2El,cardImgEl,cardUlEl,gamesUl);
    return card;
}

function createListItem(content1,content2){
    const listItem = document.createElement("li");
    listItem.textContent = content1.toUpperCase()+" : "+content2;
    return listItem;
}
function createCardList(data){
    const cardUlEl = document.createElement("ul");
    cardUlEl.setAttribute("class","card--text");
    const listItem_1 = createListItem(data.stats[0].stat.name, data.stats[0]['base_stat']);
    const listItem_2 = createListItem(data.stats[1].stat.name,data.stats[1]['base_stat']);
    const listItem_3 = createListItem(data.stats[2].stat.name ,data.stats[2]['base_stat']);
    const listItem_4 = createListItem(data.stats[3].stat.name, data.stats[3]['base_stat']);
    const listItem_5 = createListItem(data.stats[4].stat.name, data.stats[4]['base_stat']);
    const listItem_6 = createListItem(data.stats[5].stat.name, data.stats[5]['base_stat']);
    cardUlEl.append(listItem_1,listItem_2,listItem_3,listItem_4,listItem_5,listItem_6);
    return cardUlEl;
}
function createCardTitle(content){
    const cardH2El = document.createElement("h2");
    cardH2El.setAttribute("class","card--title");
    cardH2El.textContent = (content.name).charAt(0).toUpperCase()+(content.name).slice(1);
    return cardH2El;
}
function createCardImage(data){
    const cardImgEl = document.createElement("img");
    cardImgEl.setAttribute("class","card--img");
    cardImgEl.src = data.sprites.other['official-artwork'].front_default;
    cardImgEl.style.width = "256px";
    return cardImgEl;
}
function displayGames(data){
    const gamesUl = document.createElement('ul');
    gamesUl.setAttribute("class","gamesUl");
    const title = document.createElement('h4');
    title.textContent = 'GAMES';
    for(const game of data['game_indices']){
        const listItem = document.createElement('li');
        listItem.textContent = game.version.name.charAt(0).toUpperCase()+game.version.name.slice(1);
        gamesUl.append(listItem)
    }
    gamesUl.prepend(title);
    return gamesUl;
}