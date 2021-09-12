import axios from "axios";

const endpoints = {
    getCountryDetails: (country)=>`https://restcountries.eu/rest/v2/name/${country}`,
}

export function getCountryDetails(country) {
    const endpoint = endpoints.getCountryDetails(country)
    return axios.get(endpoint);
}