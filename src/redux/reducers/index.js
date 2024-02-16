import {combineReducers} from 'redux'
import {productsReducer, selectedProductsReducer} from "./productsReducer"
const reducers= combineReducers({
    alllProducts: productsReducer,
    product: selectedProductsReducer
})
export default reducers

