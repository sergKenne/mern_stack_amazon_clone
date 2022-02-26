/* eslint-disable default-case */
import { ADD_PRODUCT_TO_CART, GET_TOTAL_ITEMS, GET_TOTAL_PRICE, REMOVE_PRODUCT_FROM_CART } from "./type"

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    total: 0,
    totalItems: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_PRODUCT_TO_CART:
            const inCart = state.cart.find((el) => el._id === action.payload.product._id);
            if (inCart) {
                inCart.qty = action.payload.qty
                localStorage.setItem('cart', JSON.stringify(state.cart));
                return { ...state, cart: state.cart };
            }
            const newProduct = {...action.payload.product, qty: action.payload.qty}
            localStorage.setItem('cart', JSON.stringify([...state.cart, newProduct]));
            return { ...state, cart: [...state.cart, newProduct] };
        
        case REMOVE_PRODUCT_FROM_CART:
            const cart = state.cart.filter((item) => item._id !== action.payload)
            localStorage.setItem('cart', JSON.stringify(cart));
            return {
                ...state,
                cart: cart,
            };
        
        case GET_TOTAL_PRICE: 
            let sum;
            sum = state.cart.reduce((acc, curr) => {
                return acc + (curr.price*curr.qty)
            },0)
            return {
                ...state,
                total: sum
            }
        
        case GET_TOTAL_ITEMS: 
            let nbItems;
            nbItems = state.cart.reduce((acc, curr) => {
                return acc + (Number(curr.qty))
            },0)
            return {
                ...state,
                totalItems: nbItems
            }
        default:
            return state;
    }
}

export default cartReducer