import React, { useState, useEffect } from 'react';
import { listBooks, deleteBook, updateBook } from '../services/BookService';

const ListBookComponent = () => {
    const [books, setBooks] = useState([]);


    useEffect(() => {
        getAllBooks();
    }, []);

    const getAllBooks = () => {
        listBooks().then((response) => {
            setBooks(response.data);
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

    const handleQuantityChange = (bookId, newQuantity) => {
        const updatedBooks = books.map(book => {
            if (book.id === bookId) {
                return { ...book, custQty: newQuantity };
            }
            return book;
        });
        setBooks(updatedBooks);
    }

const saveQuantity = (bookId, bookName, price, custQty) => {
    updateBook({ bookId, bookName, price, totalQty: 100, custQty })
        .then(() => {
            // Show a success message
            console.log('Quantity updated successfully!');
            // Perform any other action, such as refreshing the book list
            getAllBooks();
        })
        .catch(error => {
            console.log(error);
            // Optional: Show an error message or perform any other action
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
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(
                            book =>
                                <tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.name}</td>
                                    <td>
                                        <input
                                            type="number"
                                            value={book.custQty}
                                            onChange={(e) => handleQuantityChange(book.id, parseInt(e.target.value))}
                                        />
                                    </td>
                                    <td>{book.price}</td>
                                    <td>
                                        <button
                                            className="btn btn-success"
                                            onClick={() => saveQuantity(book.id, book.name, book.price, book.custQty)}
                                        >
                                            Save
                                        </button>
                                        <button className="btn btn-danger" onClick={() => removeBook(book.id)} style={{ marginLeft: "10px" }}>Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListBookComponent;
