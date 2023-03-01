import { createStore, applyMiddleware, StoreEnhancer, StoreEnhancerStoreCreator, Store } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducers from '@/redux/reducers';

// 增强器
const storeEnhancer: StoreEnhancer = applyMiddleware(thunk);
const storeEnhancerStoreCreate: StoreEnhancerStoreCreator = storeEnhancer(createStore);


const store: Store = storeEnhancerStoreCreate(reducers);
export default store;
