export const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: '1984', author: 'George Orwell' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen' },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { id: 6, title: 'Animal Farm', author: 'George Orwell' },
    { id: 7, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { id: 8, title: 'Brave New World', author: 'Aldous Huxley' },
    { id: 9, title: 'Lord of the Flies', author: 'William Golding' },
    { id: 10, title: 'The Grapes of Wrath', author: 'John Steinbeck' }
  ];
  
export function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter(item =>
    item.title.split(' ').some(word =>
      word.toLowerCase().startsWith(query)
    )
  );
}  