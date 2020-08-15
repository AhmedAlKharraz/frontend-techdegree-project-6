const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');

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

    const ul = phrase.querySelector('ul');

    for (var i = 0; i < arr.length; i++) {

        // Set its contents:
        ul.appendChild(document.createTextNode(arr[i]));

        // Add it to the list:
        phrase.appendChild(ul);
    }

    return ul;
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhrasetoDisplay(phraseArray);