function SearchInput({ query, setQuery }) {
    function handleChange(e) {
        setQuery(e.target.value)
    }

    return (
        <input
        className="search-input"
        type="text"
        placeholder="Search (book or author)"
        value={query}   
        onChange={handleChange}
        />
    );
}

export default SearchInput;