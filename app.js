const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const ul = phrase.querySelector('ul');

const overlay = document.getElementById('overlay');
const startBtn = document.querySelector('.btn__reset'); //note: It written I have to attach a event listener to the “Start Game”

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
        char.push(randomSelect.charAt(i));
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

console.log(phrase);

function checkLetter(btn) {

    //loop through the child of ul and check the letter with btn, if match add "show" class
    var lis = document.querySelectorAll(".letter");
    var n = 'null';

    for (var i = 0, len = lis.length; i < len; i++) {
        if (btn === lis[i].textContent) {
            lis[i].className += ' show';
            console.log("enter if inside loop");
        } else {
            console.log(lis[i]);
        }
    }


}

qwerty.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
        e.target.setAttribute("class", "chosen");
        if (e.target.hasAttribute("class", "chosen")) {
            const btn = e.target.hasAttribute("class", "chosen");

            checkLetter(e.target.textContent);

            //loop through the child of ul and check the letter with btn, if match then add "show" class

            e.target.disabled = true
        }

    }
});