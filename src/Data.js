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
  { id: 10, title: 'The Grapes of Wrath', author: 'John Steinbeck' },
  { id: 11, title: 'Moby-Dick', author: 'Herman Melville' },
  { id: 12, title: 'Anna Karenina', author: 'Leo Tolstoy' },
  { id: 13, title: 'The Odyssey', author: 'Homer' },
  { id: 14, title: 'Frankenstein', author: 'Mary Shelley' },
  { id: 15, title: 'Jane Eyre', author: 'Charlotte Brontë' },
  { id: 16, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky' },
  { id: 17, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde' },
  { id: 18, title: 'The Scarlet Letter', author: 'Nathaniel Hawthorne' },
  { id: 19, title: 'War and Peace', author: 'Leo Tolstoy' },
  { id: 20, title: 'Wuthering Heights', author: 'Emily Brontë' },
  { id: 21, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
  { id: 22, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
  { id: 23, title: 'The Chronicles of Narnia', author: 'C.S. Lewis' },
  { id: 24, title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez' },
  { id: 25, title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky' },
  { id: 26, title: 'The Divine Comedy', author: 'Dante Alighieri' },
  { id: 27, title: 'The Adventures of Huckleberry Finn', author: 'Mark Twain' },
  { id: 28, title: 'The Sun Also Rises', author: 'Ernest Hemingway' },
  { id: 29, title: 'Don Quixote', author: 'Miguel de Cervantes' },
  { id: 30, title: 'The Old Man and the Sea', author: 'Ernest Hemingway' },
  { id: 31, title: 'Great Expectations', author: 'Charles Dickens' },
  { id: 32, title: 'The Count of Monte Cristo', author: 'Alexandre Dumas' },
  { id: 33, title: 'Catch-22', author: 'Joseph Heller' },
  { id: 34, title: 'Les Misérables', author: 'Victor Hugo' },
  { id: 35, title: 'The Bell Jar', author: 'Sylvia Plath' },
  { id: 36, title: 'The Alchemist', author: 'Paulo Coelho' },
  { id: 37, title: 'Slaughterhouse-Five', author: 'Kurt Vonnegut' },
  { id: 38, title: 'Gone with the Wind', author: 'Margaret Mitchell' },
  { id: 39, title: 'A Tale of Two Cities', author: 'Charles Dickens' },
  { id: 40, title: 'The Road', author: 'Cormac McCarthy' },
  { id: 41, title: 'The Kite Runner', author: 'Khaled Hosseini' },
  { id: 42, title: 'The Secret Garden', author: 'Frances Hodgson Burnett' },
  { id: 43, title: 'Dracula', author: 'Bram Stoker' },
  { id: 44, title: 'The Handmaid\'s Tale', author: 'Margaret Atwood' },
  { id: 45, title: 'The Stand', author: 'Stephen King' },
  { id: 46, title: 'The Shining', author: 'Stephen King' },
  { id: 47, title: 'The Road Less Traveled', author: 'M. Scott Peck' },
  { id: 48, title: 'The Little Prince', author: 'Antoine de Saint-Exupéry' },
  { id: 49, title: 'Of Mice and Men', author: 'John Steinbeck' },
  { id: 50, title: 'Heart of Darkness', author: 'Joseph Conrad' },
];

  
export function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter(item =>
    item.title.split(' ').some(word =>
      word.toLowerCase().startsWith(query)
    )
    ||
    item.author.split(' ').some(word => {
      return word.toLowerCase().startsWith(query)
    })
  );
}  