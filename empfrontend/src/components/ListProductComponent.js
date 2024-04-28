const ListBookComponent = () => {
    const [books, setBooks] = useState([]);
    const [editedBooks, setEditedBooks] = useState([]);

    useEffect(() => {
        getAllBooks();
    }, []);

    const getAllBooks = () => {
        listBooks().then((response) => {
            setBooks(response.data);
            setEditedBooks(response.data.map(book => ({ ...book, custQty: book.custQty })));
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const removeBook = (bookId) => {
        deleteBook(bookId).then(() => {
            getAllBooks();
        }).catch(error => {
            console.log(error);
        })
    }

    const handleQuantityChange = (index, event) => {
        const { value } = event.target;
        setEditedBooks(prevState => {
            const updatedBooks = [...prevState];
            updatedBooks[index].custQty = value;
            return updatedBooks;
        });
    }

    const calculateTotalPrice = (book) => {
        return book.custQty * book.price;
    }

    const calculateGrandTotal = () => {
        return editedBooks.reduce((total, book) => total + (book.custQty * book.price), 0);
    }

    const saveQuantity = (bookId, index) => {
        const editedBook = editedBooks[index];
        const updatedBook = {
            bookID: editedBook.bookID,
            bookName: editedBook.bookName,
            totalQty: editedBook.totalQty,
            price: editedBook.price,
            custQty: editedBook.custQty
        };
    
        updateBook(bookId, updatedBook)
            .then(() => {
                getAllBooks();
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="container">
            <br /><br />
            <h2 className="text-center"> Your Shopping Cart</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Book ID</th>
                        <th>Book Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        editedBooks.map((book, index) => (
                            <tr key={book.bookID}>
                                <td>{book.bookID}</td>
                                <td>{book.bookName}</td>
                                <td>
                                    <input
                                        type="number"
                                        value={book.custQty}
                                        onChange={(event) => handleQuantityChange(index, event)}
                                    />
                                </td>
                                <td>{book.price}</td>
                                <td>{calculateTotalPrice(book)}</td>
                                <td>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => saveQuantity(book.bookID, index)}
                                    >
                                        Save
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => removeBook(book.bookID)}
                                        style={{ marginLeft: "10px" }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4" className="text-end">Grand Total:</td>
                        <td>{calculateGrandTotal()}</td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default ListBookComponent;
