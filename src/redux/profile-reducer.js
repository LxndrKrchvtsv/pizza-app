import {orderAPI} from "../components/api/api";

const SET_ORDERS_HISTORY = 'SET_ORDERS_HISTORY';

let initialState = {
    orderItems: []
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDERS_HISTORY: {
            return {
                ...state,
                orderItems: [...action.orderItems]
            }
        }
        default:
            return state;
    };
};

export const getOrders = (orderItems) => ({type: SET_ORDERS_HISTORY, orderItems});

export const profile = () => {
    return (dispatch) => {
        orderAPI.profile()
            .then(response => {
                // console.log(response.data);
                dispatch(getOrders(response.data));
            })
    }
};

export default profileReducer;