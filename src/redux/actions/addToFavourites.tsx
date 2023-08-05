// actions.ts
import { Spell } from '../../services/api';

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';

// Defining the initial Interface for AddToFavoritesAction
export interface AddToFavoritesAction {
    type: typeof ADD_TO_FAVORITES;
    payload: Spell;
}

export const addToFavorites = (spell: Spell): AddToFavoritesAction => ({
    type: ADD_TO_FAVORITES,
    payload: spell,
});
