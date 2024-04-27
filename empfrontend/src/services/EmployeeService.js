import axios from 'axios';

const url = 'http://localhost:8085/api/v1/products';

export const listEmployees = async ()=>{  //edit hereeeeeeeeeeeeeeeeeeeeeeeee
    const response = await axios.get(url);
   
    return response;
};

export const createEmployee = async (product) => {
    const response = await axios.post(url, product);
    return response;
}

export const getEmployeeById = async (productId) => {
    const response = await axios.get(url + '/' + productId);
    return response;
}

export const updateEmployee = async (productId, product) => {
    const response = await axios.put(url + '/' +productId, product);
    return response;
}

export const deleteEmployee = async (productId) => {
    const response = await axios.delete(url + '/' + productId);
    return response;
}