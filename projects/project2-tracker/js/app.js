// At the very top of js/app.js, above your functions
let favorites = [];

const form = document.getElementById('add-favorite-form');
const favoritesList = document.getElementById('favorites-list');

const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');

function saveFavorites() {
  try {
    localStorage.setItem('localFavorites', JSON.stringify(favorites));
  } catch (error) {
    alert('Unable to save favorites. Storage may be disabled.');
  }
}

function loadFavorites() {
  try {
    const saved = localStorage.getItem('localFavorites');
    if (saved) {
      favorites = JSON.parse(saved);
    } else {
      favorites = [];
    }
  } catch (error) {
    favorites = [];
  }
}

function deleteFavorite(index) {
  const favorite = favorites[index];
  if (confirm(`Delete "${favorite.name}"?`)) {
    favorites.splice(index, 1);
    saveFavorites();
    searchFavorites();
  }
}

function searchFavorites() {
  const searchText = searchInput.value.toLowerCase().trim();
  const selectedCategory = categoryFilter.value;

  const filtered = favorites.filter(function(favorite) {
    const matchesSearch = searchText === '' ||
      favorite.name.toLowerCase().includes(searchText) ||
      favorite.notes.toLowerCase().includes(searchText);
    const matchesCategory = selectedCategory === 'all' ||
      favorite.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  favoritesList.innerHTML = '';

  if (filtered.length === 0) {
    favoritesList.innerHTML = `
      <p class="empty-message" style="color: var(--color-muted); font-style: italic;">
        No favorites found matching your criteria.
      </p>`;
    return;
  }

  filtered.forEach(function(favorite) {
    const index = favorites.indexOf(favorite);
    const stars = '★'.repeat(favorite.rating);
    favoritesList.innerHTML += `
      <div class="favorite-card">
        <h3>${favorite.name}</h3>
        <span class="favorite-category">${favorite.category}</span>
        <div class="favorite-rating">${stars} (${favorite.rating}/5)</div>
        ${favorite.notes ? `<p class="favorite-notes">${favorite.notes}</p>` : ''}
        <p class="favorite-date">Added: ${favorite.dateAdded}</p>
        <button class="btn-danger" onclick="deleteFavorite(${index})">Delete</button>
      </div>`;
  });
}

function addFavorite(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const category = document.getElementById('category').value;

  if (!name || !category) {
    alert('Please fill in name and category!');
    return;
  }

  const newFavorite = {
    name: name,
    category: category,
    rating: parseInt(document.getElementById('rating').value),
    notes: document.getElementById('notes').value.trim(),
    dateAdded: new Date().toLocaleDateString()
  };

  favorites.push(newFavorite);
  saveFavorites();
  form.reset();
  displayFavorites();
}

function displayFavorites() {
  searchInput.value = '';
  categoryFilter.value = 'all';
  searchFavorites();
}

form.addEventListener('submit', addFavorite);

searchInput.addEventListener('input', searchFavorites);
categoryFilter.addEventListener('change', searchFavorites);

loadFavorites(); 
displayFavorites();