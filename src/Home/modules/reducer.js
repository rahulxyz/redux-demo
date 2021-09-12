import types from './types';

const initalState = {
    countryDetails: {
        data: null,
        isLoading: false,
        error: null
    },
}

export function home(state=initalState, action){
    switch(action.type){
        case types.GET_COUNTRY_DETAILS_REQUEST:
            return {
                ...state,
                countryDetails:{
                    ...state.countryDetails,
                    isLoading: true,
                    error: null
                }
                
            }
        case types.GET_COUNTRY_DETAILS_SUCCESS:
            return {
                ...state,
                countryDetails:{
                    ...state.countryDetails,
                    data: action.payload,
                    isLoading: false,
                    error: null
                }
                
            }
        case types.GET_COUNTRY_DETAILS_FAILURE:
            return {
                ...state,
                countryDetails:{
                    ...state.countryDetails,
                    isLoading: false,
                    error: "Something went wrong!"
                }
            }
        default:
            return state;
    }
}