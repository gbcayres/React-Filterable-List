function Book({ bookInfo }) {
    return (
        <div className="book">
            <p>
                <span className="book-label">Title:</span> {bookInfo.title}
            </p>
            <p>
                <span className="book-label">Author:</span> {bookInfo.author}
            </p>
        </div>
    );
}

export default Book