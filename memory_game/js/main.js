console.log("Up and Running!");

const cards = ["queen","queen","king","king"];
const cardsInPlay = [];

var cardOne;

cardOne = cards[0];
cardTwo = cards[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardsInPlay[0]);

if (cardsInPlay.length === 2){
	console.log("Cards are in play!");
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You Found A Match!")
	}else{
		alert("Sorry Try Again!");
	}
}else{
	console.log("Something is wrong!");
}