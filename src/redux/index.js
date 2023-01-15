
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import CatalogReducer, { CatalogDetailReducer } from './reducers/CatalogReducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    catalog: CatalogReducer,
    catalogDetails: CatalogDetailReducer,
});

let initialState = {}

const middleware = [thunk]

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default store
