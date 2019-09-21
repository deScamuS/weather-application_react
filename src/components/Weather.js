/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import "./Weather.css";

const Weather = props => {
  //display component...
  return (
    <div className='container'>
      <div className='Card'>
        <h1 className='text-white py-3'>{props.cityname}</h1>
        <h5 className='py-4'>
          <i className={`wi ${props.weatherIcon} display-1`} />
        </h5>

        {/* Get Celsius */}
        {props.temp_fairenheit ? (
          <h1 className='py-2'>{props.temp_celsius}&deg;</h1>
        ) : null}

        {/* show max and min temp */}
        {minmaxTemp(props.temp_min, props.temp_max)}

        {/* Weather description */}
        <h4 className='py-3'>
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>
      </div>
    </div>
  );
};

export default Weather;

function minmaxTemp(min, max) {
  if (max && min) {
    return (
      <h3>
        <span className='px-4'>{min}&deg;</span>
        <span className='px-4'>{max}&deg;</span>
      </h3>
    );
  }
}
