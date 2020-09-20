const SET_MENU = "SET_MENU";

let initialState = {
    pizzaItems: []
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MENU: {
            return {
                ...state,
                pizzaItems: [...action.pizzaItems]
            }
        }
        default:
            return state;
    };
};

export const setMenu = (pizzaItems) => ({type: SET_MENU, pizzaItems});

export default menuReducer;