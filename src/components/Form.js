/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React from "react";
import "./Form.css";

const Form = props => {
  //input component
  return (
    <div className='container h-100'>
      <h2 style={{ color: "#dc3545" }}>Weather | React</h2>

      <form onSubmit={props.loadweather}>
        <div>{props.error ? error() : ""}</div>
        <div className='row'>
          <div className='col-md-3 offset-md-2'>
            <input
              type='text'
              className='form-control'
              placeholder='City'
              name='city'
              autoComplete='off'
            />
          </div>
          <div className='title'></div>
          <div className='col-md-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Country'
              name='country'
              autoComplete='off'
            />
          </div>
          <div className='col-md-3 mt-md-0 mt-2 text-md-left '>
            <button className='btn btn-danger'>Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

const error = props => {
  return (
    <div className='alert alert-danger mx-5' role='alert'>
      Please Enter City and Country...!
    </div>
  );
};

export default Form;
