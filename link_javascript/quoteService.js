import { quotes } from './quotes';
export function getRandomQuote(category = null) {
  const filteredQuotes = category 
    ? quotes.filter(quote => quote.category === category)
    : quotes;
    
  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  return filteredQuotes[randomIndex];
}
