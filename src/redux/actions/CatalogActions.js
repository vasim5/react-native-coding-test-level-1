
export const GET_CATALOGS = "GET_CATALOGS"
export const CATALOGS_SUCCESS = "CATALOGS_SUCCESS"
export const CATALOGS_FAILURE = "CATALOGS_FAILURE"
export const CATALOG_DETAILS_REQUEST = "CATALOG_DETAILS_REQUEST"
export const CATALOG_DETAILS_SUCCESS = "CATALOG_DETAILS_SUCCESS"
export const CATALOG_DETAILS_FAILURE = "CATALOG_DETAILS_FAILURE"
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

import { publicAxios } from "../../services/ApiInterceptor"

export const getCatalogs = (limit = 10, offset = 0) => async (dispatch) => {
    try {
        dispatch({ type: GET_CATALOGS })
        const { data } = await publicAxios.get(`https://pokeapi.co/api/v2/pokemon`, { limit, offset })
        dispatch({ type: CATALOGS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: CATALOGS_FAILURE,
            payload: error.response.data.message
        })
    }
}