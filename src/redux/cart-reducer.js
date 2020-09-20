import {orderAPI} from '../components/api/api';

const ADD_PIZZA = 'ADD_PIZZA';
const TOTAL_PRICE = 'TOTAL_PRICE';
const SHOW_PRICE = 'SHOW_PRICE';
const SET_NULL = 'SET_NULL';

let getTotalPriceDollar = 0;
let getTotalPriceEuro = 0;
let getNumOrd = Math.floor(Math.random() * Math.floor(100));
let statusResponse = null;
let dataResponse = null;

let initialState = {
    cartItems: [],
    quantityInCart: null,
    numOrder: null,
    totalPricesDE: {
        totalPriceE: null,
        totalPriceD: null,
    },
    totalDeliveryDE: {
        deliveryPriceE: 2,
        deliveryPriceD: 2.5,
    },
    showPriceVal: false,
    orderResponse: {
        numOrder: null,
        name: null
    },
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA:
            if (state.cartItems.length === 0) {
                state.cartItems.push({item: action.cartItems, count: 1})
                state.quantityInCart++
            } else if (state.cartItems.find(p => p.item.id === action.cartItems.id)) {
                state.cartItems.find(p => p.item.id === action.cartItems.id).count++
                state.quantityInCart++
            } else {
                state.cartItems.push({item: action.cartItems, count: 1})
                state.quantityInCart++
            }
        case TOTAL_PRICE:
            if (state.cartItems.length !== 0) {
                for (let i = 0; i < state.cartItems.length; i++) {
                    if (state.cartItems.length === 1) {
                        getTotalPriceDollar = Number(state.cartItems[i].item.priceDollar * state.cartItems[i].count);
                        getTotalPriceEuro = Number(state.cartItems[i].item.priceEuro * state.cartItems[i].count);
                    } else {
                        getTotalPriceDollar = Number(state.cartItems[i].item.priceDollar * state.cartItems[i].count);
                        getTotalPriceEuro = Number(state.cartItems[i].item.priceEuro * state.cartItems[i].count);
                    }
                }
            }
            if ((getTotalPriceDollar === 0) && (getTotalPriceEuro === 0)) {
                getTotalPriceDollar = state.totalDeliveryDE.deliveryPriceD;
                getTotalPriceEuro = state.totalDeliveryDE.deliveryPriceE;
            } else {
                state.totalPricesDE.totalPriceE = getTotalPriceEuro.toFixed(2);
                state.totalPricesDE.totalPriceD = getTotalPriceDollar.toFixed(2);
                state.numOrder = getNumOrd;
            }
        case SHOW_PRICE:
            if (action.type === SHOW_PRICE) {
                if (state.showPriceVal) {
                    state.showPriceVal = false;
                } else {
                    state.showPriceVal = true;
                }
            }
        case SET_NULL:
            if (statusResponse === 200) {
                state.cartItems = [];
                state.quantityInCart = null;
                state.numOrder = null;
                state.totalPricesDE.totalPriceE = null;
                state.totalPricesDE.totalPriceD = null
                state.totalDeliveryDE.deliveryPriceE = null;
                state.totalDeliveryDE.deliveryPriceD = null;
                state.showPriceVal = false;
                state.orderResponse.numOrder = action.data.numOrder;
                state.orderResponse.name = action.data.name;
                statusResponse = null;
            }
        default:
            return state;
    }
    ;
};

export const sentOrder = (name, sureName, address, tel, email, numOrder, totalPriceE, deliveryPriceE, totalPriceD, deliveryPriceD, cartItem) => {
    return (dispatch) => {
        orderAPI.sentOrder(name, sureName, address, tel, email, numOrder, totalPriceE, deliveryPriceE, totalPriceD, deliveryPriceD, cartItem)
            .then(response => {
                statusResponse = response.data.status;
                dataResponse = response.data.orderResp;
                dispatch(setNull(response.data.orderResp.numOrder, response.data.orderResp.name));
            })
    }
};
export const showPrice = (showPriceVal) => ({type: SHOW_PRICE, showPriceVal});
export const addPizza = (cartItems) => ({type: ADD_PIZZA, cartItems});
export const totalPrices = (totalPriceE, totalPriceD, numOrder) => ({
    type: TOTAL_PRICE,
    totalPriceE,
    totalPriceD,
    numOrder
});
export const setNull = (numOrder, name) => ({type: SET_NULL, data: {numOrder, name}});

export default cartReducer;