import {
    FETCH_SPELLS_REQUEST,
    FETCH_SPELLS_SUCCESS,
    FETCH_SPELLS_FAILURE,
} from '../actions/spellActions';

const initialState = {
    spells: [],
    loading: false,
    error: null,
};

const spellReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_SPELLS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_SPELLS_SUCCESS:
            return { ...state, loading: false, spells: action.payload, error: null };
        case FETCH_SPELLS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default spellReducer;
