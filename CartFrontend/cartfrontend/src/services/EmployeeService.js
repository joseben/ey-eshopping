import axios from 'axios';

const url = 'http://localhost:8085/api/v1/employees';
//http://localhost:8085/api/v1/employees

export const listEmployees = async ()=>{
    const response = await axios.get(url);
   
    return response;
};

export const createEmployee = async (employee) => {
    const response = await axios.post(url, employee);
    return response;
}

export const getEmployeeById = async (employeeId) => {
    const response = await axios.get(url + '/' + employeeId);
    return response;
}

export const updateEmployee = async (employeeId, employee) => {
    const response = await axios.put(url + '/' +employeeId, employee);
    return response;
}

export const deleteEmployee = async (employeeId) => {
    const response = await axios.delete(url + '/' + employeeId);
    return response;
}