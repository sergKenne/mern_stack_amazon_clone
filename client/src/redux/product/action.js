import axios from 'axios'
import { PRODUCT_LIST_ERROR, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from './types'
import { BASE_URL } from '../../helper'

const fecthProducts = () => async (dispatch) => {
    
    dispatch({ type: PRODUCT_LIST_REQUEST })
    try {
        //const { data } = await axios.get("/api/products")
        const { data } = await axios.get(`${BASE_URL}/api/products`)
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_ERROR,
            payload: error.message
        })
    }
    
}

export default fecthProducts