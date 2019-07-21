console.log("Up and Running!");

const cards = ["queen","queen","king","king"];
const cardsInPlay = [];

//var cardOne;
//var cardTwo;
//var cardId;

// cardOne = cards[0];
// cardTwo = cards[2];
//cardsInPlay.push(cardOne);
//cardsInPlay.push(cardTwo);

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("You Found a Match!");
	} else {
		console.log("Sorry, try again.");
	}
}

function flipCard(cardID){

	cardsInPlay.push(cards[cardID]);

	console.log("User Flipped " + cards[cardID]);

	checkForMatch();

}

flipCard(0);
flipCard(2);