import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { listBooks, deleteBook } from '../services/BookService';

const ListBookComponent = () => {
    const [books, setBooks] = useState([]);
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

    function addNewBook() {
        navigate('/add-book');
    }

    const updateBook = (id) => {
        navigate(`/edit-book/${id}`);
    }

    return (
        <div className="container">
            <br /><br />
            <h2 className="text-center">Books List</h2>
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
                                    <td>{book.quantity}</td>
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
