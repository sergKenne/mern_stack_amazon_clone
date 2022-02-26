import axios from "axios"
import { PRODUCT_DETAIL_ERROR } from "../detail/type"
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

export default getProductByCategorie;