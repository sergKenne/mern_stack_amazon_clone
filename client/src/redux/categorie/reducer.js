/* eslint-disable default-case */
import { PRODUCT_CATEGORIE_ERROR, PRODUCT_CATEGORIE_REQUEST, PRODUCT_CATEGORIE_SUCCESS } from "./type"

const initialState = {
    categorie: [],
    loading: false,
    error: ""
}

const categorieReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_CATEGORIE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PRODUCT_CATEGORIE_SUCCESS:
            return {
                loading: false,
                categorie: action.payload
            }
        case PRODUCT_CATEGORIE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default categorieReducer