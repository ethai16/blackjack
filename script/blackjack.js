var playerArray = [];
var dealerArray = [];
const deck = [];
var shuffledDeck = [];
var bigDeck = [];
var dealButton = document.querySelector("#deal-button");
var dealerPoint = document.getElementById('dealer-points');
var playerPoint = document.getElementById('player-points');
var winCount = document.getElementById('win-count');
var lossCount = document.getElementById('loss-count');
var drawCount = document.getElementById('draw-count');
var moneyCount = document.getElementById('money-accumulated');
var wagerPlaced = document.getElementById('wager-placed')
var screen = document.getElementById('screen');
var replayButton = document.createElement('button');
replayButton.setAttribute('id', 'replay-button');
replayButton.textContent = "Replay"
var wins = 0
var losses = 0
var draws = 0
var intAmount = 0
document.cookie = ""
document.getElementById('hit-button').disabled = true;
document.getElementById('stand-button').disabled = true;



var aceOfHearts = {
    point:11,
    suit: 'hearts',
    pic: '/blackjack/JPEG/AH.jpg'
};
deck.push(aceOfHearts);

var aceOfDiamonds = {
    point:11,
    suit:'diamonds',
    pic: '/blackjack/JPEG/AD.jpg'

}
deck.push(aceOfDiamonds)

var aceOfClubs = {
    point:11,
    suit: 'clubs',
    pic: '/blackjack/JPEG/AC.jpg'

}
deck.push(aceOfClubs)

var aceOfSpades = {
    point:11,
    suit: 'spades',
    pic: '/blackjack/JPEG/AS.jpg'
}
deck.push(aceOfSpades)

var twoOfHearts = {
    point:2,
    suit: 'hearts',
    pic: '/blackjack/JPEG/2H.jpg'
};
deck.push(twoOfHearts)

var twoOfDiamonds = {
    point:2,
    suit:'diamonds',
    pic: '/blackjack/JPEG/2D.jpg'

}
deck.push(twoOfDiamonds)

var twoOfClubs = {
    point:2,
    suit: 'clubs',
    pic: '/blackjack/JPEG/2C.jpg'

}
deck.push(twoOfClubs)


var twoOfSpades = {
    point:2,
    suit: 'spades',
    pic: '/blackjack/JPEG/2S.jpg'

}
deck.push(twoOfSpades)

var threeOfHearts = {
    point:3,
    suit: 'hearts',
    pic: '/blackjack/JPEG/3H.jpg'

};
deck.push(threeOfHearts)


var threeOfDiamonds = {
    point:3,
    suit:'diamonds',
    pic: '/blackjack/JPEG/3D.jpg'

}
deck.push(threeOfDiamonds)


var threeOfClubs = {
    point:3,
    suit: 'clubs',
    pic: '/blackjack/JPEG/3H.jpg'

}
deck.push(threeOfClubs)

var threeOfSpades = {
    point:3,
    suit: 'spades',
    pic: '/blackjack/JPEG/3S.jpg'

}
deck.push(threeOfSpades)

var fourOfHearts = {
    point:4,
    suit: 'hearts',
    pic: '/blackjack/JPEG/4H.jpg'

};
deck.push(fourOfHearts)


var fourOfDiamonds = {
    point:4,
    suit:'diamonds',
    pic: '/blackjack/JPEG/4D.jpg'

}
deck.push(fourOfDiamonds)


var fourOfClubs = {
    point:4,
    suit: 'clubs',
    pic: '/blackjack/JPEG/4C.jpg'

}
deck.push(fourOfClubs)

var fourOfSpades = {
    point:4,
    suit: 'spades',
    pic: '/blackjack/JPEG/4S.jpg'

}
deck.push(fourOfSpades)

var fiveOfHearts = {
    point:5,
    suit: 'hearts',
    pic: '/blackjack/JPEG/5H.jpg'

};
deck.push(fiveOfHearts)


var fiveOfDiamonds = {
    point:5,
    suit:'diamonds',
    pic: '/blackjack/JPEG/5D.jpg'

}
deck.push(fiveOfDiamonds)

var fiveOfClubs = {
    point:5,
    suit: 'clubs',
    pic: '/blackjack/JPEG/5C.jpg'

}
deck.push(fiveOfClubs)

var fiveOfSpades = {
    point:5,
    suit: 'spades',
    pic: '/blackjack/JPEG/5S.jpg'

}
deck.push(fiveOfSpades)

var sixOfHearts = {
    point:6,
    suit: 'hearts',
    pic: '/blackjack/JPEG/6H.jpg'

};
deck.push(sixOfHearts)

var sixOfDiamonds = {
    point:6,
    suit:'diamonds',
    pic: '/blackjack/JPEG/6D.jpg'

}
deck.push(sixOfDiamonds)

var sixOfClubs = {
    point:6,
    suit: 'clubs',
    pic: '/blackjack/JPEG/6C.jpg'

}
deck.push(sixOfClubs)

var sixOfSpades = {
    point:6,
    suit: 'spades',
    pic: '/blackjack/JPEG/6S.jpg'

}
deck.push(sixOfSpades)

var sevenOfHearts = {
    point:7,
    suit: 'hearts',
    pic: '/blackjack/JPEG/7H.jpg'

};
deck.push(sevenOfHearts)


var sevenOfDiamonds = {
    point:7,
    suit:'diamonds',
    pic: '/blackjack/JPEG/7D.jpg'

}
deck.push(sevenOfDiamonds)


var sevenOfClubs = {
    point:7,
    suit: 'clubs',
    pic: '/blackjack/JPEG/7C.jpg'

}
deck.push(sevenOfClubs)


var sevenOfSpades = {
    point:7,
    suit: 'spades',
    pic: '/blackjack/JPEG/7S.jpg'

}
deck.push(sevenOfSpades)


var eightOfHearts ={
    point: 8,
    suit: 'hearts',
    pic: '/blackjack/JPEG/8H.jpg'

};
deck.push(eightOfHearts)


var eightOfDiamonds = {
    point:8,
    suit:'diamonds',
    pic: '/blackjack/JPEG/8D.jpg'

}
deck.push(eightOfDiamonds)


var eightOfClubs = {
    point:8,
    suit: 'clubs',
    pic: '/blackjack/JPEG/8C.jpg'

}
deck.push(eightOfClubs)


var eightOfSpades = {
    point:8,
    suit: 'spades',
    pic: '/blackjack/JPEG/8S.jpg'

}
deck.push(eightOfSpades)

var nineOfHearts = {
    point:9,
    suit: 'hearts',
    pic: '/blackjack/JPEG/9H.jpg'

};
deck.push(nineOfHearts)


var nineOfDiamonds = {
    point:9,
    suit:'diamonds',
    pic: '/blackjack/JPEG/9D.jpg'

}
deck.push(nineOfDiamonds)


var nineOfClubs = {
    point:9,
    suit: 'clubs',
    pic: '/blackjack/JPEG/9C.jpg'

}
deck.push(nineOfClubs)

var nineOfSpades = {
    point:9,
    suit: 'spades',
    pic: '/blackjack/JPEG/9S.jpg'

}
deck.push(nineOfSpades)

var tenOfHearts = {
    point:10,
    suit: 'hearts',
    pic: '/blackjack/JPEG/10H.jpg'

};
deck.push(tenOfHearts)

var tenOfDiamonds = {
    point:10,
    suit:'diamonds',
    pic: '/blackjack/JPEG/10D.jpg'

}
deck.push(tenOfDiamonds)


var tenOfClubs = {
    point:10,
    suit: 'clubs',
    pic: '/blackjack/JPEG/10C.jpg'

}
deck.push(tenOfClubs)


var tenOfSpades = {
    point:10,
    suit: 'spades',
    pic: '/blackjack/JPEG/10S.jpg'

}
deck.push(tenOfSpades)

var jackOfHearts = {
    point:10,
    suit: 'hearts',
    pic: '/blackjack/JPEG/JH.jpg'

};
deck.push(jackOfHearts)


var jackOfDiamonds = {
    point:10,
    suit:'diamonds',
    pic: '/blackjack/JPEG/JD.jpg'

}
deck.push(jackOfDiamonds)


var jackOfClubs = {
    point:10,
    suit: 'clubs',
    pic: '/blackjack/JPEG/JC.jpg'

}
deck.push(jackOfClubs)


var jackOfSpades = {
    point:10,
    suit: 'spades',
    pic: '/blackjack/JPEG/JS.jpg'

}
deck.push(jackOfSpades)

var queenOfHearts = {
    point:10,
    suit: 'hearts',
    pic: '/blackjack/JPEG/QH.jpg'

};
deck.push(queenOfHearts)


var queenOfDiamonds = {
    point:10,
    suit:'diamonds',
    pic: '/blackjack/JPEG/QD.jpg'

}
deck.push(queenOfDiamonds)

var queenOfClubs = {
    point:10,
    suit: 'clubs',
    pic: '/blackjack/JPEG/QC.jpg'

}
deck.push(queenOfClubs)

var queenOfSpades = {
    point:10,
    suit: 'spades',
    pic: '/blackjack/JPEG/QS.jpg'

}
deck.push(queenOfSpades)

var kingOfHearts = {
    point:10,
    suit: 'hearts',
    pic: '/blackjack/JPEG/KH.jpg'

};
deck.push(kingOfHearts)

var kingOfDiamonds = {
    point:10,
    suit:'diamonds',
    pic: '/blackjack/JPEG/KD.jpg'

}
deck.push(kingOfDiamonds)

var kingOfClubs = {
    point:10,
    suit: 'clubs',
    pic: '/blackjack/JPEG/KC.jpg'

}
deck.push(kingOfClubs)

var kingOfSpades = {
    point:10,
    suit: 'spades',
    pic: '/blackjack/JPEG/KS.jpg'

}
deck.push(kingOfSpades)

var duplicateDeck = deck

function deal(){
    return deck.pop()
}
function threeDeck() {
    for(var i =0; i<deck.length;i++ ){
        bigDeck.push(deck[i]);
        bigDeck.push(deck[i]);
        bigDeck.push(deck[i]);
    }
}

function calcPoints(array){
    var sum = 0;
    var aceCount = 0;
    var other = 0;
    for(var i = 0; i <array.length; i++){
        sum += array[i].point
        if (array[i] == aceOfClubs || array[i] == aceOfDiamonds || array[i] == aceOfHearts || array[i] ==aceOfSpades){
            aceCount++
        }else {
            other++
        }
        if (sum > 21){
            if (array.includes(aceOfClubs)||array.includes(aceOfHearts)||array.includes(aceOfDiamonds)||array.includes(aceOfSpades)){
                sum = sum - (aceCount*10)
                aceCount = 0
            }
        }
    }    
    return sum
}



function shuffleArray(array) {
    for (var i =array.length -1; i > 0; i--){
        var j = Math.floor(Math.random() * (i+1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

shuffleArray(deck)







function bustFunc() {
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

function loseFunc(){
    var lose = document.createElement('div');
    lose.setAttribute('class', 'pop-up busted bg-danger d-flex align-items-center justify-content-center')
    lose.textContent = "You lose"
    screen.appendChild(lose)
    lose.appendChild(replayButton)
    losses++
    moneyCount.textContent = Number(moneyCount.textContent) - intAmount
}

function winFunc(){
    var win = document.createElement('div');
    win.setAttribute('class', 'pop-up busted bg-danger d-flex align-items-center justify-content-center')
    win.textContent = "You win"
    screen.appendChild(win)
    win.appendChild(replayButton)
    wins++
    moneyCount.textContent = Number(moneyCount.textContent) + intAmount
}

function tieFunc(){
    var tie = document.createElement('div');
    tie.setAttribute('class', 'pop-up busted bg-danger d-flex align-items-center justify-content-center')
    tie.textContent = "It's a draw"
    screen.appendChild(tie)
    tie.appendChild(replayButton)
    draws++
}


dealButton.addEventListener('click', function(){
    document.getElementById('bet-button').disabled = true;
    document.getElementById("deal-button").disabled = true;
    document.getElementById('hit-button').disabled = false;
    document.getElementById('stand-button').disabled = false;
    for (var i = 0; i < 2; i++) {
        dealerArray.push(deal())
        var img = document.createElement("img");
        img.src = dealerArray[dealerArray.length-1].pic;
        img.setAttribute('class', 'height100 cardIMG')
        dealerHand.appendChild(img);
    }
    dealerPoint.textContent = calcPoints(dealerArray).toString()

    for (var i = 0; i < 2; i++) {
        playerArray.push(deal())
        var img = document.createElement("img");
        img.src = playerArray[playerArray.length-1].pic;
        img.setAttribute('class', 'height100 cardIMG')
        playerHand.appendChild(img);
    }
    playerPoint.textContent = calcPoints(playerArray).toString()


})

var hitButton = document.querySelector('#hit-button');

hitButton.addEventListener('click', function(){
    playerArray.push(deal())
    var img = document.createElement("img");
    img.src = playerArray[playerArray.length-1].pic;
    img.setAttribute('class', 'height100 cardIMG')
    playerHand.appendChild(img);
    playerPoint.textContent = calcPoints(playerArray).toString()
    if (calcPoints(playerArray) > 21){
        bustFunc()
        lossCount.textContent = losses.toString()
    }
})

var standButton = document.querySelector('#stand-button');

standButton.addEventListener('click', function(){
    document.getElementById('hit-button').disabled = true;
    document.getElementById('stand-button').disabled = true;
    while (calcPoints(dealerArray) <= 17){
        dealerArray.push(deal())
        var img = document.createElement("img");
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

var betButton = document.querySelector('#bet-button');

betButton.addEventListener('click', function(){
    var betAmount = document.getElementById('wager').value
    intAmount = Number(betAmount)
    if (isNaN(betAmount)){
        alert("Must input numbers");
        document.getElementById('wager').value = ''
        return false;
    }else{
        if (intAmount > Number(moneyCount.textContent)){
            document.getElementById('wager').value = ''
            alert('YOU DO NOT HAVE ENOUGH MONEY!')
            intAmount = 0
            return false;
        }else{
            wagerPlaced.textContent = betAmount
            return intAmount
        }
    }
})

replayButton.addEventListener('click', function(){
    intAmount = 0
    wagerPlaced.textContent = intAmount
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
    document.getElementById('bet-button').disabled = false;
    if (Number(moneyCount.textContent) === 0){
        alert("YOU DON'T HAVE ANY MORE MONEY! HERE'S A DOLLAR");
        moneyCount.textContent = '1'
    }
})





