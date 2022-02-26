/* eslint-disable default-case */
import { PRODUCT_CATEGORIE_ERROR, PRODUCT_CATEGORIE_REQUEST, PRODUCT_CATEGORIE_SUCCESS } from "./type"

const initialState = {
    categorie: JSON.parse(localStorage.getItem('productByCategory')) || [],
    loading: false,
    error: '',
};

const categorieReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_CATEGORIE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PRODUCT_CATEGORIE_SUCCESS:
            return {
                ...state,
                loading: false,
                categorie: action.payload
            }
        case PRODUCT_CATEGORIE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default categorieReducer