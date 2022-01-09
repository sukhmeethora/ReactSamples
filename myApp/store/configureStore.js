import { createStore, combineReducers } from 'redux';
import detailReducer from '../reducers/detailsReducer';
const rootReducer = combineReducers(
    { name: detailReducer }
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;

