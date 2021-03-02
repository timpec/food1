let initialState = {
    productsInCart: []
}

const cartItems = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {...state, productsInCart: [action.payload, ...state.productsInCart]}
        case 'REMOVE_FROM_CART':
            return [state.filter(cartItem => cartItem.key !== action.payload.key)]
        case 'CLEAR_CART':

        default:
            return state;
    }
}

export default cartItems