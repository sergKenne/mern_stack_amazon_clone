import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import cartReducer from './carts/reducer';
import categorieReducer from './categorie/reducer';
import detailReducer from './detail/reducer';
import productReducer from './product/reducer'

const reducers = combineReducers({
    products: productReducer,
    detail: detailReducer,
    cart: cartReducer,
    categorie: categorieReducer,
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store