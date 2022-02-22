import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import productReducer from './product/reducer'



const reducers = combineReducers({
    products : productReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store