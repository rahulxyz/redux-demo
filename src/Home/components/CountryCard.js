import React from "react";
import "./CountryCard.css";

const CountryCard = ({ data, isLoading, error }) => {
    if (isLoading)
        return (
            <div className="country-card">
                <div>Loading...</div>
            </div>
        );

    if (error)
        return (
            <div className="country-card">
                <div>{error}</div>
            </div>
        );

    if(!data)
        return (
            <div className="country-card">
                <div>Default View</div>
            </div>
        );

    return (
        <div className="country-card">
            {data && <div>{data.name}</div>}
        </div>
    );
};

export default CountryCard;
