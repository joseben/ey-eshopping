import axios from 'axios';

const url = 'http://localhost:8085/api/v1/products';

export const listBooks = async ()=>{  //edit hereeeeeeeeeeeeeeeeeeeeeeeee
    const response = await axios.get(url);
   
    return response;
};

export const updateBook = async (productId, product) => {
    const response = await axios.put(url + '/' +productId, product);
    return response;
}

export const deleteBook = async (productId) => {
    const response = await axios.delete(url + '/' + productId);
    return response;
}