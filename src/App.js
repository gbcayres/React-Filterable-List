import { useState } from 'react';
import { books, filterItems } from './Data';
import BookList from './components/BookList';
import  SearchInput  from './components/SearchInput' ;

function App() {
  
  const [query, setQuery] = useState('');
  
  const search = filterItems(books, query)
  console.log(search)

  return (
    <div className="App">
      <h1>Filterable Book List</h1>
      <SearchInput query={query} setQuery={setQuery}/>
      <BookList bookArray={search} />
    </div>
  );
}

export default App;
