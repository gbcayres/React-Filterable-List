import Book from "./Book";

function BookList({ bookArray }) {
    return (
        <div className="book-list">
            {
                bookArray.length > 0 ? (
                    bookArray.map((book) => {
                        return <Book key={book.id} bookInfo={book} />
                            
                    })
                ) : (
                    <h3 className="empty-warn">No book was found...</h3>
                )
            }
        </div>
    );
}

export default BookList