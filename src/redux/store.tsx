// store.ts
import { createStore } from 'redux';
import { rootReducer } from './reducers/favReducer';

const store = createStore(rootReducer);

export default store;
