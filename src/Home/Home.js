import React from "react";
import CountryCard from "./components/CountryCard";
import { getCountryDetails } from "./modules/operations";
import "./Home.css";

const countries = [1, 2, 3];

const Home = (props) => {
    const { getCountryDetails, countryDetails } = props;

    
    return (
        <div className="home">
            <CountryCard {...countryDetails} />

            <button className="home-btn" onClick={()=>getCountryDetails("France", false)}>Get Country</button>

            <button className="home-btn" onClick={()=>getCountryDetails("France", true)}>Fail Get Country</button>
        </div>
    );
};

export default Home;
