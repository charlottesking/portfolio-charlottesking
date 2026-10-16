function loadWeather() {
    const el = document.getElementById('weather-display');
    el.innerHTML = `<div class="loading-state"><div class="spinner"></div><p>Loading weather...</p></div>`;

    fetch('./data/weather.json')
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => {
            console.error('Error loading weather:', error);
            displayWeatherError();
        });
}

function displayWeather(weather) {
    document.getElementById('weather-display').innerHTML = `
        <div class="weather-current">
            <div class="weather-icon">${weather.icon}</div>
            <div class="weather-temp">${weather.temperature}°F</div>
            <div class="weather-location">${weather.location}</div>
            <div class="weather-condition">${weather.condition}</div>
        </div>`;
}

function displayWeatherError() {
    document.getElementById('weather-display').innerHTML =
        `<p class="widget-error">Weather data is unavailable right now.</p>`;
}

// Variables beside each other (Task 5)
let allQuotes = [];
let currentQuoteIndex = -1;
const quoteButton = document.getElementById('new-quote-btn');

function loadQuotes() {
    fetch('./data/quotes.json')
        .then(response => response.json())
        .then(quotes => {
            allQuotes = quotes;
            displayRandomQuote();
            if (allQuotes.length > 0) {
                quoteButton.disabled = false;
            }
        })
        .catch(error => {
            console.error('Error loading quotes:', error);
            displayQuotesError();
        });
}

function displayRandomQuote() {
    const display = document.getElementById('quotes-display');
    if (allQuotes.length === 0) {
        display.innerHTML = `<p class="widget-error">No quotes available.</p>`;
        return;
    }

    // Pick a new index that isn't the current one (Task 5)
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * allQuotes.length);
    } while (randomIndex === currentQuoteIndex && allQuotes.length > 1);
    currentQuoteIndex = randomIndex;

    const quote = allQuotes[randomIndex];
    display.innerHTML = `
        <div class="quote-text">"${quote.text}"</div>
        <div class="quote-author">- ${quote.author}</div>`;
}

function displayQuotesError() {
    document.getElementById('quotes-display').innerHTML =
        `<p class="widget-error">Quote data is unavailable right now.</p>`;
}

function initializeTheme() {
    if (localStorage.getItem('dashboardTheme') === 'dark') {
        document.body.classList.add('theme-dark');
    }
}

function toggleTheme() {
    const isDark = document.body.classList.toggle('theme-dark');
    if (isDark) {
        localStorage.setItem('dashboardTheme', 'dark');
    } else {
        localStorage.setItem('dashboardTheme', 'light');
    }
}

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
initializeTheme();

// Task storage functions
function loadTasks() {
    const tasksJSON = localStorage.getItem('dashboardTasks');
    return tasksJSON ? JSON.parse(tasksJSON) : [];
}

function saveTasks(tasks) {
    localStorage.setItem('dashboardTasks', JSON.stringify(tasks));
}

function addTask(taskText) {
    const tasks = loadTasks();
    tasks.push({ text: taskText, completed: false, id: Date.now() });
    saveTasks(tasks);
    displayTasks();
}

function toggleTask(index) {
    const tasks = loadTasks();
    tasks[index].completed = !tasks[index].completed;
    saveTasks(tasks);
    displayTasks();
}

function deleteTask(index) {
    const tasks = loadTasks();
    if (confirm(`Delete task: "${tasks[index].text}"?`)) {
        tasks.splice(index, 1);
        saveTasks(tasks);
        displayTasks();
    }
}

// Wire the New Quote button (Task 4)
quoteButton.addEventListener('click', displayRandomQuote);

// Load calls at the bottom
loadWeather();
loadQuotes();
