import { Dispatch } from 'redux';
import { getSpells, getSpellDetails } from '../../services/api';

export const FETCH_SPELLS_REQUEST = 'FETCH_SPELLS_REQUEST';
export const FETCH_SPELLS_SUCCESS = 'FETCH_SPELLS_SUCCESS';
export const FETCH_SPELLS_FAILURE = 'FETCH_SPELLS_FAILURE';

export const fetchSpells = () => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: FETCH_SPELLS_REQUEST });
        const spells = await getSpells();
        dispatch({ type: FETCH_SPELLS_SUCCESS, payload: spells });
    } catch (error) {
        // @ts-ignore
        dispatch({ type: FETCH_SPELLS_FAILURE, payload: error.message });
    }
};

// Similar actions can be defined for fetching spell details
