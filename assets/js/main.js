
const inputs = document.body.querySelectorAll("input");
const quoteUser = document.body.querySelector("textarea");
const cardsWrapper = document.body.querySelector("#cardsWrapper");

function Card() {
    this.vorname= "",
    this.nachname= "",
    this.stagename= "",
    this.albums= "",
    this.singles= "", 
    this.worth= "",
    this.age= "",
    this.quote= "",
    this.url= "",
    this.showInHtml= function addCard() {

        const cardHolder = document.createElement("div");
        const fullnameHolder = document.createElement("p");
        const stageNameHolder = document.createElement("p");
        const albumsHolder = document.createElement("p");
        const singlesHolder = document.createElement("p");
        const worthHolder = document.createElement("p");
        const ageHolder = document.createElement("p");
        const quoteHolder = document.createElement("p");
        
        fullnameHolder.textContent = this.vorname + " " + this.nachname;
        stageNameHolder.textContent = this.stagename;
        albumsHolder.textContent = `Albums: ${this.albums}`;
        singlesHolder.textContent = `Top10 Singles: ${this.singles}`;
        worthHolder.textContent = `Net Worth: ${this.worth}€`;
        ageHolder.textContent = `Age: ${this.age}`;
        quoteHolder.textContent = `"${this.quote}"`;
        cardHolder.style.backgroundImage = `url(${this.url})`;
        console.log(this)
    
        cardHolder.append(fullnameHolder, stageNameHolder, albumsHolder, singlesHolder, worthHolder, ageHolder, quoteHolder)
        cardsWrapper.append(cardHolder);
    
    }
}

const newCard = new Card();

inputs[8].addEventListener("click", () => {
    event.preventDefault()
    newCard.vorname = inputs[0].value;
    newCard.nachname = inputs[1].value;
    newCard.stagename = inputs[2].value;
    newCard.albums = inputs[3].value;
    newCard.singles = inputs[4].value;
    newCard.worth = inputs[5].value;
    newCard.age = inputs[6].value;
    newCard.quote = quoteUser.value;
    newCard.url = inputs[7].value;
    newCard.showInHtml()
})






