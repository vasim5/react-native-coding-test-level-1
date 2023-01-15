import { CATALOGS_FAILURE, CATALOGS_SUCCESS, CATALOG_DETAILS_FAILURE, CATALOG_DETAILS_REQUEST, CATALOG_DETAILS_SUCCESS, CLEAR_ERRORS, GET_CATALOGS } from "../actions/CatalogActions";

const INIT_STATE = {
    catalogs: [],
    loading: false,
    loadingMore: false,
    error: '',
    hasNext: true,
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_CATALOGS:
            return { ...state, loading: state.catalogs.length == 0, loadingMore: state.catalogs.length > 0 }

        case CATALOGS_SUCCESS:
            return { ...state, catalogs: [...state.catalogs, ...action.payload.results], loadingMore: false, loading: false, hasNext: action.payload.next != null }

        case CATALOGS_FAILURE:
            return { ...state, error: action.payload, loading: false, loadingMore: false }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
    }
    return state;
}

const DETAIL_INIT_STATE = {
    catalog: {},
    loading: false,
    error: ''
}

export const CatalogDetailReducer = (state = DETAIL_INIT_STATE, action) => {
    switch (action.type) {
        case CATALOG_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CATALOG_DETAILS_SUCCESS:
            return {
                loading: false,
                catalog: action.payload,
            }
        case CATALOG_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}