const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const ul = phrase.querySelector('ul');

const overlay = document.getElementById('overlay');
const overlayH2 = document.querySelector('h2');
const startBtn = document.querySelector('.btn__reset'); //note: It written I have to attach a event listener to the “Start Game”

var lis = document.querySelectorAll(".letter");

const ol = document.getElementsByTagName('ol')[0];
const hearts = ol.getElementsByTagName('li');

const phrases = [
    'Boldness be my friend',
    'Leave no stone unturned',
    'Broken crayons still color',
    'The adventure begins',
    'Dream without fear',
    'Love without limits',
];

let missed = 0;

//This code to hide the starter page and view the game
startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

function getRandomPhraseAsArray(arr) {
    //This function should randomly choose a phrase from the phrases array 
    //and split that phrase into a new array of characters. 
    //The function should then return the new character array.

    randomSelect = arr[Math.floor(Math.random() * arr.length)];
    console.log(randomSelect);
    let char = [];
    for (var i = 0; i < randomSelect.length; i++) {
        char.push(randomSelect.charAt(i).toLowerCase());
    }

    console.log(char);
    return char;
}


function addPhraseToDisplay(arr) {
    // do stuff any arr that is passed in, and add to `#phrase ul`

    /* 
        for (var i = 0; i < arr.length; i++) {

            //console.log(arr[i]);
            
                    if (typeof arr[i] === 'string' || arr[i] instanceof String) {
                        var li = document.createElement("li");
                        li.appendChild(document.createTextNode(arr[i]));
                        li.className += 'letter';
                        ul.appendChild(li);
                    } else {
                        var li = document.createElement("li");
                        li.appendChild(document.createTextNode(arr[i]));
                        li.className += 'space';
                        ul.appendChild(li);
                    }
                }
                */

    arr.forEach(function (i) {
        if (i !== " ") {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(i));
            li.className += 'letter';
            ul.appendChild(li);
        } else {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(i));
            li.className += 'space';
            ul.appendChild(li);
        }
    });


    return phrase;
}


const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

console.log(phraseArray.length);

function checkLetter(btn) {

    //loop through the child of ul and check the letter with btn, if match add "show" class
    var lis = document.querySelectorAll(".letter");
    var n = null;

    //lastLi = lis[lis.length - 1].textContent;

    for (var i = 0, len = lis.length; i < len; i++) {

        console.log(lis[i].textContent, btn)

        if (btn === lis[i].textContent) {
            lis[i].className += ' show';
            console.log("enter if inside loop");
            n = lis[i].textContent;
        }

        /*
        if (lastLi == lis[i].textContent) {
            console.log('nooooo');
        }
        */
    }

    return n;


}

function tryAgain(endScreen) {

    console.log('game over');

    overlay.style.removeProperty('display');
    overlay.className = endScreen;

    if (endScreen == 'lose') {
        overlayH2.innerHTML = 'Ooops, You Lose >.<';
    } else {
        overlayH2.innerHTML = 'Woohoo, YOU WIN';
    }
}

qwerty.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
        e.target.setAttribute("class", "chosen");
        if (e.target.hasAttribute("class", "chosen")) {

            const btn = e.target.hasAttribute("class", "chosen");
            e.target.disabled = true;

            // assign the returned value of the checkLetter function to a variable
            let letterFound = checkLetter(e.target.textContent);

            let allLetterClasses = ul.querySelectorAll(" .show").length + ul.querySelectorAll(".space").length;
            console.log(allLetterClasses);

            if (allLetterClasses === phraseArray.length) {
                console.log('Wooohoooooooo I wiiiiiinnnnnnn');
                tryAgain('win');
            }

            if (letterFound === null && missed != 5) {
                missed += 1;
                ol.removeChild(hearts[0]);
            }

            if (missed == 5) {
                tryAgain('lose');
            }
        }

    }
});