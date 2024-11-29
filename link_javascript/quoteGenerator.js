// quoteGenerator.js
import { quotes } from './quotes.js';

let currentCategory = 'all'; // Default category is 'all'

function getRandomQuote(category = null) {
  const filteredQuotes = category 
    ? quotes.filter(quote => quote.category === category)
    : quotes;
    
  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  return filteredQuotes[randomIndex];
}

function updateQuote() {
  const quote = getRandomQuote(currentCategory === 'all' ? null : currentCategory);
  const quoteText = document.querySelector('.quote-text');
  const quoteAuthor = document.querySelector('.quote-author');
  
  quoteText.textContent = `"${quote.text}"`;
  quoteAuthor.textContent = `- ${quote.author}`;
}

export function initQuoteGenerator() {
  const categoryButtons = document.querySelectorAll('.category-buttons button');
  const generateButton = document.querySelector('.generate-button');

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      currentCategory = button.dataset.category;
      updateQuote();
    });
  });

  generateButton.addEventListener('click', updateQuote);

  // Set initial active button and quote
  document.querySelector('[data-category="all"]').classList.add('active');
  updateQuote();
}
