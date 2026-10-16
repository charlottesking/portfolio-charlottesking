# Project 3: Personal Dashboard

A responsive personal dashboard built with vanilla HTML, CSS, and JavaScript. It pulls in data from JSON files, lets you manage tasks, and saves your settings.

## Links
* **Live Site:**(https://charlottesking.github.io/dashboard/)
* **GitHub Repo:**(https://github.com/charlottesking/dashboard.git)

## Features
* **Weather Widget:** Uses `fetch()` to load local weather from a JSON file, shows a loading spinner, and displays an error message if the file fails to load.
* **Quote Generator:** Fetches quotes from a JSON file and picks a random quote. Uses a loop so the same quote never shows twice in a row.
* **Task Tracker:** Lets you add, check off, and delete tasks. Saves everything to `localStorage` so tasks stay when you refresh.
* **Dark Mode Toggle:** Uses CSS variables to swap between light and dark themes with one click. Remembers your choice using `localStorage`.
* **Accessible & Responsive:** Adapts to mobile and desktop screens using CSS Grid and includes a "Skip to content" link.

## Tech Used
* HTML5 (semantic elements)
* CSS3 (CSS variables, CSS Grid, animations)
* Vanilla JavaScript (fetch API, Promises, localStorage, DOM manipulation)
