import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = "6bc53e0dce3867dbed2ccba35356ed23";


class App extends React.Component {

	// in react 16, constructor is deprecated
	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		error: undefined,
	}

	// arrow functions don't need binding in new react
	// async await: great way of making http requests
	getWeather = async (e) => {
		// prevent default is similar to `return foo(); false` in traditional javascript
		// e stands for event
		e.preventDefault();

		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value; 

		try{
			// template strings(``) allows us to inject the variables defined
			const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
			// convert the response to json
			const data = await api_call.json();

			console.log(data);
			this.setState({
				temperature: data.main.temp,
				city: data.name,
				country: data.sys.country,
				humidity: data.main.humidity,
				description: data.weather[0].description,
				error: '',
			});
		}
		catch(err) {
			console.log(err.message);

			this.setState({
				temperature: undefined,
				city: undefined,
				country: undefined,
				humidity: undefined,
				description: undefined,
				error: 'Please fill in the fields correctly',
			});
		}
	}

	render(){
		return (
			<div className="container">
				<div className="row">
					<div className="five columns">
						<Title />
					</div>
					<div className="seven columns">
						<Form getWeather={this.getWeather}/>
						<Weather 
							temperature={this.state.temperature}
							city={this.state.city}
							country={this.state.country}
							humidity={this.state.humidity}
							description={this.state.description}
							error={this.state.error}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;