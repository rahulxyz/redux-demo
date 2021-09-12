import types from './types';
import * as operations from './operations';

const actions = {
    getCountryDetails
}

function getCountryDetails(country, failApi){
    return async dispatch =>{
        dispatch(request());
        try{
            const response = await operations.getCountryDetails(country);
            const data = response.data[0];
            if(failApi)
                throw "myException";

            dispatch(success(data));
        }catch(error){
            dispatch(failure(error));
        }
    }

    function request() {
        return {type: types.GET_COUNTRY_DETAILS_REQUEST};
    }

    function success(payload) {
        return {type: types.GET_COUNTRY_DETAILS_SUCCESS, payload};
    }

    function failure(error) {
        return {type: types.GET_COUNTRY_DETAILS_FAILURE, error};
    }
}

export default actions;