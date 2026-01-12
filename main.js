const wordInput = document.getElementById('wordInput');
const wordSearch = document.getElementById('wordSearch');
const wordList = document.getElementById('wordList');
const registerButton = document.getElementById('registerButton');
const searchButton = document.getElementById('searchButton');
var words = [];

function showMessage(text) {
    const box = document.getElementById('messageBox');
    const messageText = document.getElementById('messageText');
    messageText.innerHTML = text;
    box.classList.remove('hidden');
}

function closeMessage() {
    document.getElementById('messageBox').classList.add('hidden');
}

registerButton.addEventListener('click', registerWord);

function registerWord() {
    const word = wordInput.value.toLowerCase().trim();
    if (word) {
        words.push(word);
        displayWords();
        showMessage(`Word <strong>"${word}"</strong> registered successfully!`);
        wordInput.value = '';
    } else {
        showMessage('Please enter a valid word.');
    }
}

searchButton.addEventListener('click', searchWord);

function searchWord() {
    const searchTerm = wordSearch.value.toLowerCase().trim();
    if (searchTerm) {
        search = words.includes(searchTerm);
        if (search) {
            showMessage(`Word <strong>"${searchTerm}"</strong> found in the dictionary!`);
        } else {
            showMessage(`Word <strong>"${searchTerm}"</strong> not found in the dictionary.`);
        }
    } else {
        showMessage('Please enter a valid word to search.');
    }
}

function displayWords() {
    wordList.innerHTML = '';
    words.forEach((word, index) => {
        const li = document.createElement('li');
        li.textContent = word;
        wordList.appendChild(li);
    });
}