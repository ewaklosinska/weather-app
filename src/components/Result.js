import React from 'react';
import './Result.css';

const Result = (props) => {

    const {err, city, date, time, sunrise, sunset, temp, feelsLike, pressure, wind, description, icon} = props.weather

    let content = null;

    if(!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    const celsiusTemp = (temp - 273.15).toFixed();
    const celsiusFeelsLikeTemp = (feelsLike - 273.15).toFixed();
    const weatherIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    const descriptionCapitalized = description.charAt(0).toUpperCase() + description.slice(1);
    
        content = (
            <div className='result'>
                <div className='placeAndTime'>
                    <h2>{city.toUpperCase()}</h2>
                    <h4>{date}</h4>
                    <h4><i class="fas fa-clock"></i> {time}</h4>
                    <h4><i class="fas fa-sun"></i> {sunriseTime}</h4>
                    <h4><i class="fas fa-moon"></i> {sunsetTime}</h4>
                </div>
                <div className="mainInfo">
                    <div className='temp'>
                        <h2>{celsiusTemp}<sup>&#176;C</sup></h2>
                        <h3>Odczuwalna: {celsiusFeelsLikeTemp} &#176;C</h3>
                    </div>
                    <div className='additionalInfo'>
                        <div>
                            <img src={weatherIcon} alt="weather icon"/>
                            <h4>{descriptionCapitalized}</h4>
                        </div>
                        <div>
                            <h4>Siła wiatru: {wind} m/s</h4>
                            <h4>Ciśnienie: {pressure} hPa</h4>
                        </div>
                    </div> 
                </div>
                
            </div>
        )
    }

    return(
        <div>
            {err ? `Nie odnaleziono w bazie miasta ${city}` : content}
        </div>
    )
}

export default Result