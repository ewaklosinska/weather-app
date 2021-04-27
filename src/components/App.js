import React from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

class App extends React.Component {

  
  state = {
    value: '',
    date: '',
    time: '',
    city: '',
    sunrise: '',
    sunset: '',
    wind: '',
    pressure: '',
    temp: '',
    feelsLike: '',
    icon:'',
    err: false,

}

handleCitySubmit = (e) => {
e.preventDefault();
const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=e15eca489ff47bc3dd2a282ecc1adc7d&lang=pl`;

fetch(API)
.then(response => {
  if(response.ok){
    return response
  }
  throw Error("Nie odnaleziono w bazie")
})
.then(response => response.json())
.then(result => {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  this.setState(prevState => ({
    err: false,
    date: date,
    time: time,
    city: prevState.value,
    sunrise: result.sys.sunrise,
    sunset: result.sys.sunset,
    wind: result.wind.speed,
    pressure: result.main.pressure,
    temp: result.main.temp,
    feelsLike: result.main.feels_like,
    description: result.weather[0].description,
    icon: result.weather[0].icon
  }))
})
.catch(err => {
  console.log(err);
  this.setState(prevState => ({
    err: true,
    city: prevState.value
  }))
})
}



handleInputChange = (e) => {
  this.setState({
    value: e.target.value,
  })
}

render()  {
  return (
    <div className="App">
      <h1>Sprawdź pogodę w swoim mieście:</h1>
      <Form 
      change={this.handleInputChange} 
      submit={this.handleCitySubmit}
      value={this.state.value}/>
      <Result weather={this.state} />
    </div>
    ) 
  }
}

export default App