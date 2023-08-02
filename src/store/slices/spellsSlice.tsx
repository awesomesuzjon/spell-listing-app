// src/store/slices/spellsSlice.ts

import {createSlice, createAsyncThunk, PayloadAction, ThunkAction} from '@reduxjs/toolkit';
import axios from 'axios';

interface Spell {
    id: number;
    name: string;
    level: number;
    description: string;
    // Add other spell properties as needed
}

interface SpellsState {
    data: Spell[];
    loading: boolean;
    error: string | null;
}

const initialState: SpellsState = {
    data: [],
    loading: false,
    error: null,
};

export const fetchSpells = createAsyncThunk('spells/fetchSpells', async () => {
    const response = await axios.get<Spell[]>('http://www.dnd5eapi.co/api/spells'); // Replace the URL with the actual API endpoint for spells
    return response.data;
});

const spellsSlice = createSlice({
    name: 'spells',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSpells.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSpells.fulfilled, (state, action: PayloadAction<Spell[]>) => {
                state.data = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchSpells.rejected, (state) => {
                state.loading = false;
                state.error = 'Failed to fetch spells from the API';
            });
    },
});

export default spellsSlice.reducer;

// Typing for custom action types (optional, if needed)
interface SpellsAction {
    type: string;
    payload?: any;
}

export type AppThunk = ThunkAction<void, SpellsState, unknown, SpellsAction>;

// Selector to access the spell data from the Redux store
export const selectSpellsData = (state: SpellsState) => state.data;
export const selectSpellsLoading = (state: SpellsState) => state.loading;
export const selectSpellsError = (state: SpellsState) => state.error;
