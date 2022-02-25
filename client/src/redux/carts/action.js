import { ADD_PRODUCT_TO_CART } from "./type";

export const addToCart = (product) => ({
    type: ADD_PRODUCT_TO_CART,
    payload: product
}) 