import { useEffect, useState } from "react";
import Country from "./country/Country";
import './countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountry] = useState([]);

    const [visitedFlag, setVisitedFlag] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountry = country =>{
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountry(newVisitedCountries);
    }

    const handleVisitedFlag = flag => {
        const newVisitedFlag = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlag);
    }

    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            <div>
                <h5>Visited Countries : {visitedCountries.length}</h5>

                <ul>
                    {
                        visitedCountries.map(country => <li key = {country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                    {
                        visitedFlag.map((flag, idx) => <img  key = {idx} src={flag}></img>)
                    }
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country key = {country.cca3} 
                    handleVisitedCountry = {handleVisitedCountry}
                    handleVisitedFlag = {handleVisitedFlag}
                    country = {country}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;