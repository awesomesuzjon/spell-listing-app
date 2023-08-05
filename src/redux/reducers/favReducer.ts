import { combineReducers } from 'redux';
import { ADD_TO_FAVORITES, AddToFavoritesAction } from '../actions/addToFavourites';
import { REMOVE_FROM_FAVORITES, RemoveFromFavoritesAction } from '../actions/removeFromFav';
import { Spell } from '../../services/api';

// Defining the interface for favoritesState
export interface FavoritesState {
  favorites: Spell[];
}

// Defining the initial state for favorites
const initialState: FavoritesState = {
  favorites: [],
};

// Defining  the favorites reducer
const favoritesReducer = (state : Spell[], action: AddToFavoritesAction | RemoveFromFavoritesAction): Spell[] => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [...state, action.payload];
    case REMOVE_FROM_FAVORITES:
      return state?.filter((spell) => spell.index !== action.payload);
    default:
      return state || initialState.favorites;
  }
};

// Combining all reducers into the root reducer
export const rootReducer = combineReducers({
  favorites: favoritesReducer,
});
