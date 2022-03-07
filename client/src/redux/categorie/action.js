import axios from "axios"
import { PRODUCT_DETAIL_ERROR } from "../detail/type"
import {
    FILTER_BY_RATING,
    SORT_ASC,
    SORT_BY_PRICE_100_1000,
    SORT_BY_PRICE_10_100,
    SORT_BY_PRICE_1_10,
    SORT_DESC,
    SORT_NEW,
    SORT_AVG,
} from '../categorie/type';
import { PRODUCT_CATEGORIE_REQUEST, PRODUCT_CATEGORIE_SUCCESS } from "./type"

export const getProductByCategorie = (category) => async (dispatch) => {
    dispatch({ type: PRODUCT_CATEGORIE_REQUEST })
    try {
        const { data } = await axios.get("/api/products")
        if (category === "Any") {
            localStorage.setItem('productByCategory', JSON.stringify(data));
            dispatch({ type: PRODUCT_CATEGORIE_SUCCESS, payload: data }); 
        } else {
            const filtering = data.filter(item => item.category === category)
            localStorage.setItem("productByCategory", JSON.stringify(filtering))
            dispatch({type: PRODUCT_CATEGORIE_SUCCESS, payload: filtering}) 
        }
        
    } catch (error) {
        dispatch({type: PRODUCT_DETAIL_ERROR, payload: error.message})
    }
}


export const getProductDesc = () => ({
    type: SORT_DESC
})

export const getProductAsc = () => ({
    type: SORT_ASC,
});

export const getProductNew = (prod) => (dispath, getState) => {
    dispath({
        type: SORT_NEW,
        payload:  prod 
    })
};

export const getProductAvg = (prod) => (dispath, getState) => {
    dispath({
        type: SORT_AVG,
        payload: prod.sort((a,b) => a.rating - b.rating),
    });
};

export const sortByPrice = (range) => (dispatch, getState) => {
    const min = Number(range.split("-")[0]) 
    const max = Number(range.split('-')[1]);
    if (min >= 1 && max <= 10) {
        console.log("getState:", getState())
        const items = getState().products.products.filter(
            (el) => el.price >= min && el.price <= max,
        ).sort((a,b)=>a.price - b.price);
        dispatch({
            type: SORT_BY_PRICE_1_10,
            payload: items,
        });
    } else if (min >= 10 && max <= 100) {
        const items = getState().products.products.filter(
            (el) => el.price >= min && el.price <= max,
        ).sort((a,b)=>a.price - b.price);
        dispatch({
            type: SORT_BY_PRICE_10_100,
            payload: items,
        });
    } else if (min >= 100 && max <= 1000) {
        const items = getState().products.products.filter(
            (el) => el.price >= min && el.price <= max,
        ).sort((a,b)=>a.price - b.price);
        dispatch({
            type: SORT_BY_PRICE_100_1000,
            payload: items,
        });
    }
      
}

export const filterByRating = (rating) => (dispatch, getState) => {
    
    const items = getState().products.products.filter(elt => elt.rating >= rating )
    dispatch({
        type: FILTER_BY_RATING,
        payload: items
    })
}

