const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const addQuoteBtn = document.getElementById('addQuoteBtn');
const quoteList = document.getElementById('quoteList');

// Load existing quotes on page load
window.onload = displayQuotes;

addQuoteBtn.addEventListener('click', () => {
  const text = quoteText.value.trim();
  const author = quoteAuthor.value.trim();

  if (text && author) {
    const quote = {
      id: Date.now(),
      text,
      author
    };

    localStorage.setItem(`quote-${quote.id}`, JSON.stringify(quote));
    quoteText.value = '';
    quoteAuthor.value = '';
    displayQuotes();
  } else {
    alert("Please fill out both fields.");
  }
});

function displayQuotes() {
  quoteList.innerHTML = '';

  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith('quote-')) {
      const quote = JSON.parse(localStorage.getItem(key));

      const quoteCard = document.createElement('div');
      quoteCard.className = 'quote-card';
      quoteCard.innerHTML = `
        <p>"${quote.text}"</p>
        <small>- ${quote.author}</small>
        <button class="remove-btn" onclick="removeQuote('${key}')">X</button>
      `;

      quoteList.appendChild(quoteCard);
    }
  });
}

function removeQuote(key) {
  localStorage.removeItem(key);
  displayQuotes();
}
