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
            <div className='container'>
                <div className='result'>
                    <div className='placeAndTime'>
                        <h2 className='place'>{city.toUpperCase()}</h2>
                        <h4 className='date'>{date}</h4>
                        <h4 className='time'>{time}</h4>
                    </div>
                    <div className="sunriseAndSunset">
                        <h4><i className="fas fa-sun"></i> {sunriseTime}</h4>
                        <h4><i className="fas fa-moon"></i> {sunsetTime}</h4>
                    </div>
                    <div className="mainInfo">
                        <div className='temp'>
                            <h2>{celsiusTemp}<sup>&#176;C</sup></h2>
                            <h4>Odczuwalna: {celsiusFeelsLikeTemp} &#176;C</h4>
                            <h4 className='description'>{descriptionCapitalized}</h4>
                        </div>
                        <div className='additionalInfo'>
                            <div className='weatherIcon'>
                                <img src={weatherIcon} alt="weather icon"/>
                                
                            </div>
                            <div className='windAndPressure'>
                                <h4>Siła wiatru: {wind} m/s</h4>
                                <h4>Ciśnienie: {pressure} hPa</h4>
                            </div>
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