import React from 'react';


// no need of state, so make stateless functional Component,
// we removed class, so `this` doesn't make sense
// we can also get rid of the return statement as we explicitly returning one `<div>` block as we do always
const Weather = (props) => (
	<div>
		{ props.city && props.country && <p>Location: {props.city}, {props.country}</p> }
		{ props.temperature && <p>Temperature: {props.temperature}</p>}
		{ props.humidity && <p>Humidity: {props.humidity}</p>}
		{ props.description && <p>Conditions: {props.description}</p>}
		{ props.error && <p>{props.error}</p>}
	</div>
);

export default Weather