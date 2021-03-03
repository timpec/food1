let initialState = {
    productsInCart: []
}

const cartItems = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {...state, productsInCart: [action.payload, ...state.productsInCart]}
        case 'REMOVE_FROM_CART':
            const index = state.productsInCart.indexOf(action.payload);
            if (index > -1) {
                state.productsInCart.splice(index, 1);
            }
            //state.productsInCart = [...state.productsInCart];
            return {...state, productsInCart: [...state.productsInCart]};
        case 'CLEAR_CART':

        default:
            return state;
    }
}

export default cartItems