import { createStore, combineReducers } from 'redux';
import pizzas from './reducers/pizzas';
import filters from './reducers/filters';

let store = createStore(combineReducers({ filters, pizzas }));

export default store;
