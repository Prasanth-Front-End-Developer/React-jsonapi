import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [inputData, setInputdata] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3030/users', inputData)
      .then(res => {
        alert("Data Posted Successfully!");
        navigate('/home');
      });
  };

  return (
    <div className='container'>
      <div className='row justify-content-center align-items-center vh-100'>
        <div className='col-md-6'>
          <div className='border bg-white text-white p-5'>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor="name" className='text-dark'>Name:</label>
                <input
                  type='text'
                  name='name'
                  className='form-control'
                  onChange={e => setInputdata({ ...inputData, name: e.target.value })}
                />
              </div>
              <div className='form-group'>
                <label htmlFor="email" className='text-dark'>Email:</label>
                <input
                  type='email'
                  name='email'
                  className='form-control'
                  onChange={e => setInputdata({ ...inputData, email: e.target.value })}
                />
              </div>
              <div className='form-group'>
                <label htmlFor="mobile" className='text-dark'>Mobile:</label>
                <input
                  type='text'
                  name='mobile'
                  className='form-control'
                  onChange={e => setInputdata({ ...inputData, mobile: e.target.value })}
                />
              </div>
              <br />
              <button className='btn btn-dark'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
