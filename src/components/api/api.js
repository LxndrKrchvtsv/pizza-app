import * as axios from 'axios';

export const orderAPI = {
    sentOrder(name, sureName, address, tel, email, totalPriceE, totalPriceD, cartItem, numOrder) {
        return axios.post(`https://rest-api-pizza.herokuapp.com/create-order`, {
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
        return axios.get(`https://rest-api-pizza.herokuapp.com/login?phonenumber=${tel}&channel=sms`)
    },
    verify(tel, code) {
        return axios.get(`https://rest-api-pizza.herokuapp.com/verify?phonenumber=${tel}&code=${code}`)
    },
    auth() {
        return axios.get(`https://rest-api-pizza.herokuapp.com/auth`, {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
    },
    profile() {
        return axios.get(`https://rest-api-pizza.herokuapp.com/profile`, {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
    }
};