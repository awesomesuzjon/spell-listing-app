// reducers/favReducer.ts
import { ADD_TO_FAVORITES, AddToFavoritesAction } from '../actions/addToFavourites';
import { REMOVE_FROM_FAVORITES, RemoveFromFavoritesAction } from '../actions/removeFromFav';
import { combineReducers } from 'redux';
import { Spell } from '../../services/api';

// Define the state shape for favorites
export interface FavoritesState {
    favorites: Spell[];
}

// Define the initial state for favorites
const initialState: FavoritesState = {
    favorites: [],
};

// Define the favorites reducer
const favoritesReducer = (state = initialState.favorites, action: AddToFavoritesAction | RemoveFromFavoritesAction): Spell[] => {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return [...state, action.payload];
        case REMOVE_FROM_FAVORITES:
            return state.filter((spell) => spell.index !== action.payload);
        default:
            return state;
    }
};

// Combine all reducers into the root reducer
export const rootReducer = combineReducers({
    favorites: favoritesReducer,
});

// Define the root state type
export type AppState = ReturnType<typeof rootReducer>;
