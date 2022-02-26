import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "./type";

export const addToCart = (product, qty) => ({
    type: ADD_PRODUCT_TO_CART,
    payload: { product, qty }
}) 

export const deleteToCart = (id) => ({
    type: REMOVE_PRODUCT_FROM_CART,
    payload: id,
}); 

