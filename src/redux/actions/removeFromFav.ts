export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

// Defining the Interface for RemoveFromFavoritesAction

export interface RemoveFromFavoritesAction {
  type: typeof REMOVE_FROM_FAVORITES;
  payload: string; // In this case, the payload will be the index of the spell to be removed
}

export const removeFromFavorites = (index: string): RemoveFromFavoritesAction => ({
  type: REMOVE_FROM_FAVORITES,
  payload: index,
});
