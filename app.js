
//creating an array called cards
var cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
var messageEl = document.getElementById("message-el")
// var sumEl = document.getElementById("sum-el")
//Using the querySelector
var sumEl = document.querySelector("#sum-el")
var cardsEL = document.querySelector(".cards-el")

// Creating an object
let player = {
    name: "Cath",
    chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

// Creating a function that returns a random number between 1 and 13
function getRandomCard() {
   // if 1     -> return 11 create a condition for the Ace
    // if 11-13 -> return 10 create a condition for the King/ Queen and Joker
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}


//  Create a startGame() function.
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}
//Creating a renderGame() function
function renderGame(){
   // cardsEL.textContent = "Cards: " + cards[0] + " , " + cards[1] this renders only two cards.

     // Creating a for loop that renders out all the cards instead of just two
     for (let i = 0; i < cards.length; i++) {
        cardsEL.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if (isAlive === true && hasBlackJack === false) {
            var card = getRandomCard()
            sum += card
            cards.push(card)
            renderGame()        
    }

    // console.log("Drawing a new card from the deck")
    // var card = getRandomCard()
    // sum += card
    // //Pushing the new card into the cards array
    // cards.push(card)
    // console.log(cards)
    // renderGame()
}


//We use .push() to add more data to a declared variable.
//we use the .pop() to remove a data from a declared variable
