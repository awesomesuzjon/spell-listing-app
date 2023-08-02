// src/store/store.ts

import { configureStore } from '@reduxjs/toolkit';
import dndReducer from './slices/dndSlice';
import spellsReducer from './slices/spellsSlice';

const store = configureStore({
    reducer: {
        dnd: dndReducer,
        spells: spellsReducer,
        // Add other reducers here if needed
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
