/* eslint-disable default-case */
import { ADD_PRODUCT_TO_CART, REMOV_PRODUCT_FROM_CART } from "./type"

const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART: 
            const inCart = state.cart.find(el => el._id === action.payload._id)
            if (inCart) {
                inCart.qty++ 
                localStorage.setItem("cart", JSON.stringify(state.cart))
                return { cart: state.cart }    
            }
            localStorage.setItem('cart', JSON.stringify([...state.cart, action.payload]));
            return { cart: [...state.cart, action.payload] }
        case REMOV_PRODUCT_FROM_CART:
            return {
                cart: state.cart.filter(item => item._id !== action.payload)
            }
        default:
            return state
    }
}

export default cartReducer