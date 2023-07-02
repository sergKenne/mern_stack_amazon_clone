import axios from "axios";
import { PRODUCT_DETAIL_ERROR, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS } from "./type";
import { BASE_URL } from "../../helper";


const fecthDetailProduct = (id) => async (dispatch) => {
    dispatch({ type: PRODUCT_DETAIL_REQUEST })
    
    try {
        //const { data } = await axios.get(`/api/products/${id}`);
        const { data } = await axios.get(`${BASE_URL}/api/products/${id}`);  //for deployement
        console.log("data fetching", data);
        dispatch({
            type: PRODUCT_DETAIL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAIL_ERROR,
            payload: error.message
        })
    }
    
}


export default fecthDetailProduct