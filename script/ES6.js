var playerArray = [];
var dealerArray = [];
var shuffledDeck = [];
var bigDeck = [];
var [wins, losses, draws] = [0,0,0]
var dealButton = document.querySelector("#deal-button");
var dealerPoint = document.getElementById('dealer-points');
var playerPoint = document.getElementById('player-points');
var winCount = document.getElementById('win-count');
var lossCount = document.getElementById('loss-count');
var drawCount = document.getElementById('draw-count');
var screen = document.getElementById('screen');
var replayButton = document.createElement('button');
var hitButton = document.querySelector('#hit-button');
var standButton = document.querySelector('#stand-button');
var betButton = document.querySelector('#bet-button');
var betAmount = document.getElementById('wager').value
replayButton.setAttribute('id', 'replay-button');
replayButton.textContent = "Replay"
document.getElementById('hit-button').disabled = true;
document.getElementById('stand-button').disabled = true;
var moneyCount = document.getElementById('money-accumulated');
var wagerPlaced = document.getElementById('wager-placed')


var deck = [];
var suits = ['H', 'D', 'C', 'S'];
var names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var values = [11,2,3,4,5,6,7,8,9,10,10,10,10]

for (var i = 0; i < names.length; i++){
    for(var j = 0; j < suits.length; j++){
        let card = {name: names[i], point: values[i], suit: suits[j], pic:`/blackjack/JPEG/${names[i]}${suits[j]}.jpg`}
        deck.push(card)
    }
}


var deal = () => deck.pop();


var calcPoints = (array) => {
    let sum = 0;
    let aceCount = 0;

    for(var i = 0; i <array.length; i++){
        sum += array[i].point
        if (array[i].name == 'A'){
            aceCount++
        }
        if (sum > 21){
            sum = sum - (aceCount*10)
            aceCount = 0
        }
    }   
    return sum
}




var shuffleArray = (array) => {
    for (let i =array.length -1; i > 0; i--){
        let j = Math.floor(Math.random() * (i+1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

shuffleArray(deck)


var bustFunc = () => {
    var bust = document.createElement('div');
    bust.setAttribute('class', 'pop-up busted bg-danger d-flex align-items-center justify-content-center')
    bust.textContent = "You busted"
    screen.appendChild(bust)
    bust.appendChild(replayButton)
    document.getElementById('hit-button').disabled = true;
    document.getElementById('stand-button').disabled = true;
    losses++
    moneyCount.textContent = Number(moneyCount.textContent) - intAmount
}

var loseFunc = () => {
    var lose = document.createElement('div');
    lose.setAttribute('class', 'pop-up busted bg-danger d-flex align-items-center justify-content-center')
    lose.textContent = "You lose"
    screen.appendChild(lose)
    lose.appendChild(replayButton)
    losses++
    moneyCount.textContent = Number(moneyCount.textContent) - intAmount
}

var winFunc = () => {
    var win = document.createElement('div');
    win.setAttribute('class', 'pop-up busted bg-danger d-flex align-items-center justify-content-center')
    win.textContent = "You win"
    screen.appendChild(win)
    win.appendChild(replayButton)
    wins++
    moneyCount.textContent = Number(moneyCount.textContent) + intAmount
}


var tieFunc = () => {
    let tie = document.createElement('div');
    tie.setAttribute('class', 'pop-up busted bg-danger d-flex align-items-center justify-content-center')
    tie.textContent = "It's a draw"
    screen.appendChild(tie)
    tie.appendChild(replayButton)
    draws++
}


dealButton.addEventListener('click', () => {
    document.getElementById("deal-button").disabled = true;
    document.getElementById('hit-button').disabled = false;
    document.getElementById('stand-button').disabled = false;
    for (let i = 0; i < 2; i++) {
        dealerArray.push(deal())
        let img = document.createElement("img");
        img.src = dealerArray[dealerArray.length-1].pic;
        img.setAttribute('class', 'height100 cardIMG')
        dealerHand.appendChild(img);
    }
    dealerPoint.textContent = calcPoints(dealerArray).toString()

    for (let i = 0; i < 2; i++) {
        playerArray.push(deal())
        let img = document.createElement("img");
        img.src = playerArray[playerArray.length-1].pic;
        img.setAttribute('class', 'height100 cardIMG')
        playerHand.appendChild(img);
    }
    playerPoint.textContent = calcPoints(playerArray).toString()


})



hitButton.addEventListener('click', () => {
    playerArray.push(deal())
    let img = document.createElement("img");
    img.src = playerArray[playerArray.length-1].pic;
    img.setAttribute('class', 'height100 cardIMG')
    playerHand.appendChild(img);
    playerPoint.textContent = calcPoints(playerArray).toString()
    if (calcPoints(playerArray) > 21){
        bustFunc()
        lossCount.textContent = losses.toString()
    }
})


standButton.addEventListener('click', () => {
    document.getElementById('hit-button').disabled = true;
    document.getElementById('stand-button').disabled = true;
    while (calcPoints(dealerArray) <= 17){
        dealerArray.push(deal())
        let img = document.createElement("img");
        img.src = dealerArray[dealerArray.length-1].pic;
        img.setAttribute('class', 'height100 cardIMG')
        dealerHand.appendChild(img);
        dealerPoint.textContent = calcPoints(dealerArray).toString()
    }
    if (calcPoints(dealerArray) > calcPoints(playerArray) && calcPoints(dealerArray) <= 21){
        loseFunc();
        lossCount.textContent = losses.toString()

    } else if(calcPoints(dealerArray) < calcPoints(playerArray) && calcPoints(dealerArray) <= 21){
        winFunc()
        winCount.textContent = wins.toString()

    } else if (calcPoints(dealerArray) > 21){
        winFunc()
        winCount.textContent = wins.toString()

    }else if (calcPoints(dealerArray) == calcPoints(playerArray) && dealerArray.length < playerArray.length){
        loseFunc()
        lossCount.textContent = losses.toString()

    }else if (calcPoints(dealerArray) == calcPoints(playerArray) && dealerArray.length > playerArray.length){
        winFunc()
        winCount.textContent = wins.toString()

    }else{
        tieFunc()
        drawCount.textContent = draws.toString()

    }
})



betButton.addEventListener('click',() => {
    var betAmount = document.getElementById('wager').value
    intAmount = Number(betAmount)
    if (isNaN(betAmount)){
        alert(`Must input numbers`);
        document.getElementById('wager').value = ''
        return false;
    }else{
        if (intAmount > Number(moneyCount.textContent)){
            document.getElementById('wager').value = ''
            alert(`YOU DO NOT HAVE ENOUGH MONEY!`)
            intAmount = 0
            return false;
        }else{
            wagerPlaced.textContent = betAmount
            return intAmount
        }
    }
})

replayButton.addEventListener('click', ()=>{

    $('#dealerHand').empty()
    $('#playerHand').empty()
    $('#dealer-points').empty()
    $('#player-points').empty()
    $('#screen').empty()
    while (dealerArray.length != 0){
        deck.push(dealerArray.pop())
    }
    while (playerArray.length != 0){
        deck.push(playerArray.pop())
    }
    shuffleArray(deck)
    sum = 0;
    document.getElementById("deal-button").disabled = false;
    document.getElementById('hit-button').disabled = true;
    document.getElementById('stand-button').disabled = true;
    if (Number(moneyCount.textContent) === 0){
        alert(`YOU DON'T HAVE ANY MORE MONEY! HERE'S A DOLLAR`);
        moneyCount.textContent = `1`
    }
})


