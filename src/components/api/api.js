import * as axios from 'axios';

export const orderAPI = {
    sentOrder(name, sureName, address, tel, email, totalPriceE, totalPriceD, cartItem, numOrder) {
        return axios.post(`http://localhost:3001/create-order/`, {
            name,
            sureName,
            address,
            tel,
            email,
            cartItem,
            totalPriceE,
            totalPriceD,
            numOrder
        });
    },

    login(tel) {
        return axios.get(`http://localhost:3001/login?phonenumber=${tel}&channel=sms`)
    },
    verify(tel, code) {
        return axios.get(`http://localhost:3001/verify?phonenumber=${tel}&code=${code}`)
    },
    auth() {
        return axios.get(`http://localhost:3001/auth`, {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
    },
    profile() {
        return axios.get(`http://localhost:3001/profile`, {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
    }
};