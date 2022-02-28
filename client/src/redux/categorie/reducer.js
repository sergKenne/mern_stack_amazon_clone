/* eslint-disable default-case */
import { SORT_ASC, SORT_BY_PRICE_100_1000, SORT_BY_PRICE_10_100, SORT_BY_PRICE_1_10, SORT_DESC, SORT_NEW } from "../categorie/type";
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
                loading: true,
            };
        case PRODUCT_CATEGORIE_SUCCESS:
            return {
                ...state,
                loading: false,
                categorie: action.payload,
            };
        case PRODUCT_CATEGORIE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        // SORT BY ASC _ DESC
        case SORT_ASC:
            return {
                ...state,
                categorie: state.categorie.sort((a, b) => a.price - b.price),
            };
        case SORT_DESC:
            return {
                ...state,
                categorie: state.categorie.sort((a, b) => b.price - a.price),
            };
        case SORT_NEW:
            return {
                ...state,
                categorie: action.payload,
            };

        //SORT_BY_PRICE
        case SORT_BY_PRICE_1_10:
            return {
                ...state,
                categorie: action.payload,
            };
        case SORT_BY_PRICE_10_100:
            return {
                ...state,
                categorie: action.payload,
            };
        case SORT_BY_PRICE_100_1000:
            return {
                ...state,
                categorie: action.payload,
            };
        
        default:
            return state;
    }
}

export default categorieReducer