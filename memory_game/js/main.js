console.log("Up and Running!");

var cards = [
{
	rank:"queen",
	suit:"hearts",
	cardImage:"images/queen-of-hearts.png",
},
{
	rank:"queen",
	suit:"diamonds",
	cardImage:"images/queen-of-diamonds.png",
},
{
	rank:"king",
	suit:"hearts",
	cardImage:"images/king-of-hearts.png",
},
{
	rank:"king",
	suit:"diamonds",
	cardImage:"images/king-of-diamonds.png",
}
];
const cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]|| cardsInPlay.length == 2){
		alert("You Found a Match!");
	} else if (cardsInPlay.length == 2){
		alert("Sorry, try again.");
	}
}

function flipCard(cardID){

	cardsInPlay.push(cards[cardID].rank);

	console.log("User Flipped " + cards[cardID].rank);
	console.log("Card Suit " + cards[cardID].suit);
	console.log("Card Image " + cards[cardID].cardImage);

	checkForMatch();

}

flipCard(0);
flipCard(2);