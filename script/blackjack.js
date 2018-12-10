var playerArray = [];
var dealerArray = [];
var deck = [];
var shuffledDeck = [];

var aceOfHearts = {
    point:1,
    suit: 'hearts',
    pic: '/blackjack/JPEG/AH.jpg'
};
deck.push(aceOfHearts);

var aceOfDiamonds = {
    point:1,
    suit:'diamonds',
    pic: '/blackjack/JPEG/AD.jpg'

}
deck.push(aceOfDiamonds)

var aceOfClubs = {
    point:1,
    suit: 'clubs',
    pic: '/blackjack/JPEG/AC.jpg'

}
deck.push(aceOfClubs)

var aceOfSpades = {
    point:1,
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

function deal(){
    return deck.pop()
}

function calcPoints(array){
    var sum = 0;
    for(var i = 0; i <array.length; i++){
        sum += array[i].point
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
console.log(deck)



var dealButton = document.querySelector("#deal-button");
var dealerPoint = document.getElementById('dealer-points');
var playerPoint = document.getElementById('player-points');
var screen = document.getElementById('screen')



dealButton.addEventListener('click', function(){

    for (var i = 0; i < 2; i++) {
        dealerArray.push(deal())
        var img = document.createElement("img");
        img.src = dealerArray[dealerArray.length-1].pic;
        img.setAttribute('class', 'height100')
        dealerHand.appendChild(img);
    }
    dealerPoint.textContent = calcPoints(dealerArray).toString()

    for (var i = 0; i < 2; i++) {
        playerArray.push(deal())
        var img = document.createElement("img");
        img.src = playerArray[playerArray.length-1].pic;
        img.setAttribute('class', 'height100')
        playerHand.appendChild(img);
    }
    playerPoint.textContent = calcPoints(playerArray).toString()


})

var hitButton = document.querySelector('#hit-button');

hitButton.addEventListener('click', function(){
    playerArray.push(deal())
    var img = document.createElement("img");
    img.src = playerArray[playerArray.length-1].pic;
    img.setAttribute('class', 'height100')
    playerHand.appendChild(img);
    playerPoint.textContent = calcPoints(playerArray).toString()
    if (calcPoints(playerArray) > 21){
        var bust = document.createElement('div');
        bust.setAttribute('class', 'busted bg-danger d-flex align-items-center justify-content-center')
        bust.textContent = "You busted"
        screen.appendChild(bust)
    }
})




console.log(playerArray)
console.log(dealerArray)
