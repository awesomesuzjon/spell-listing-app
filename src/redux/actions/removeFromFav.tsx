// actions/removeFromFav.ts
import { Spell } from '../../services/api';

export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export interface RemoveFromFavoritesAction {
    type: typeof REMOVE_FROM_FAVORITES;
    payload: string; // In this case, the payload will be the index of the spell to be removed
}

export const removeFromFavorites = (index: string): RemoveFromFavoritesAction => ({
    type: REMOVE_FROM_FAVORITES,
    payload: index,
});
