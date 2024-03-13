import { books, filterItems } from './Data';
import BookList from './components/BookList';

function App() {

  const bookList = books;

  return (
    <div className="App">
      <h1>Filterable Book List</h1>
      <BookList bookArray={bookList} />
    </div>
  );
}

export default App;
