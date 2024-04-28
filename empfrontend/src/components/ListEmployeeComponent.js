import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { listBooks, deleteBook, updateBook } from '../services/BookService';

const ListBookComponent = () => {
    const [books, setBooks] = useState([]);
    const [editBookId, setEditBookId] = useState(null);
    const [editedQuantity, setEditedQuantity] = useState('');
    const navigate = useNavigate();

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
        deleteBook(bookId).then((response) => {
            getAllBooks();
        }).catch(error => {
            console.log(error);
        })
    }

    const updateQuantity = (bookId, newQuantity) => {
        updateBook(bookId, { quantity: newQuantity }).then((response) => {
            getAllBooks();
        }).catch(error => {
            console.log(error);
        })
    }

    const startEditing = (bookId, quantity) => {
        setEditBookId(bookId);
        setEditedQuantity(quantity.toString());
    }

    const cancelEditing = () => {
        setEditBookId(null);
        setEditedQuantity('');
    }

    const saveEditedQuantity = (bookId) => {
        updateQuantity(bookId, parseInt(editedQuantity));
        cancelEditing();
    }

    const handleQuantityChange = (event) => {
        setEditedQuantity(event.target.value);
    }

    function addNewBook() {
        navigate('/add-book');
    }

    return (
        <div className="container">
            <br /><br />
            <h2 className="text-center">Books List</h2>
            <button className="btn btn-primary mb-2" onClick={addNewBook}>Add Book</button>
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
                                        {editBookId === book.id ? (
                                            <div>
                                                <input
                                                    type="number"
                                                    value={editedQuantity}
                                                    onChange={handleQuantityChange}
                                                    style={{ width: '70px' }}
                                                />
                                                <button className="btn btn-success" onClick={() => saveEditedQuantity(book.id)}>Save</button>
                                                <button className="btn btn-danger" onClick={cancelEditing}>Cancel</button>
                                            </div>
                                        ) : (
                                            <div>
                                                {book.quantity}
                                                <button className="btn btn-primary" onClick={() => startEditing(book.id, book.quantity)}>Edit</button>
                                            </div>
                                        )}
                                    </td>
                                    <td>{book.price}</td>
                                    <td>
                                        <button className="btn btn-info" onClick={() => updateBook(book.id)}>Update</button>
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
