// src/store/slices/dndSlice.ts

import {createSlice, createAsyncThunk, ThunkDispatch, AnyAction} from '@reduxjs/toolkit';
import {RootState} from "../store";

// Replace 'any' with the specific data structure of the API response
interface DndData {
    // Your data structure here
}

interface DndState {
    data: DndData | null;
    loading: boolean;
    error: string | null;
}

const initialState: DndState = {
    data: null,
    loading: false,
    error: null,
};

// Replace 'fetchDndData' with the correct endpoint and response type for your API
export const fetchDndData = createAsyncThunk<DndData, void, {}>('dnd/fetchData', async () => {
    const response = await fetch('http://www.dnd5eapi.co/api/');
    const data: DndData = await response.json();
    return data;
});

const dndSlice = createSlice({
    name: 'dnd',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDndData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDndData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchDndData.rejected, (state, action) => {
                state.loading = false;
                state.error = 'Failed to fetch data from the API';
            });
    },
});

export default dndSlice.reducer;

// Typing for the custom dispatch function (optional, if needed)
export type AppDispatch = ThunkDispatch<RootState, {}, AnyAction>;

// Selector to access the dnd data from the Redux store
export const selectDndData = (state: RootState) => state.dnd.data;
export const selectDndLoading = (state: RootState) => state.dnd.loading;
export const selectDndError = (state: RootState) => state.dnd.error;
