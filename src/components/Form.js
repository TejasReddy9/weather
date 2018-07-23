import React from 'react';

// can be made stateless functional component so, do it
const Form = (props) => ( 
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" id="city" placeholder="City"/>
		<input type="text" name="country" id="country" placeholder="Country"/>
		<button>Get Weather</button>
	</form>
);

export default Form