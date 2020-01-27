import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'localhost:2019/api',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
}
