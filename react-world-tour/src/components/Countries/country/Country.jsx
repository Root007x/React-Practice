import { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountry, handleVisitedFlag}) => {

    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handle_visited = () =>{
        setVisited(!visited);
    }

    console.log(handleVisitedCountry);

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color : visited ? "Purple" : "White"}}>Name : {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Marked Country</button>
            <br></br>
            <button onClick={() => handleVisitedFlag(country.flags.png)}>Visited Flag</button>
            <br />
            <button onClick={handle_visited}>{visited ? "Visited" : "Going"}</button>
            {visited ? "I have visited this country." : "I want to visit"}
        </div>
    );
};

export default Country;