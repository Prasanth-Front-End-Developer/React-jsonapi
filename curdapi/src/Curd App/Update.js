import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();

  const [inputData, setInputdata] = useState({
    id: id,
    name: '',
    email: '',
    mobile: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3030/users/' + id)
      .then((res) => setInputdata(res.data)) 
      .catch((err) => console.log(err));
  }, [id]); 

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put('http://localhost:3030/users/' + id, inputData)
      .then((res) => {
        alert('Data Updated Successfully!');
        navigate('/home');
      });
  };

  return (
    <div className='d-flex  justify-content-center align-items-center'>
      <div className=' col-md-6 justify-content-center align-items-center border bg-white text-white p-5 m-5'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='id' className='text-dark'>ID:</label>
            <input
              type='number'
              disabled
              name='id'
              className='form-control'
              value={inputData.id}
              onChange={(e) => setInputdata({ ...inputData, id: e.target.value })} 
            />
          </div>
          <div>
            <label htmlFor='name' className='text-dark'>Name:</label>
            <input
              type='text' 
              name='name'
              className='form-control'
              value={inputData.name}
              onChange={(e) => setInputdata({ ...inputData, name: e.target.value })} 
            />
          </div>
          <div>
            <label htmlFor='email' className='text-dark'>Email:</label>
            <input
              type='email'
              name='email'
              className='form-control'
              value={inputData.email}
              onChange={(e) => setInputdata({ ...inputData, email: e.target.value })} 
            />
          </div>
          <div>
            <label htmlFor='mobile' className='text-dark'>Mobile:</label>
            <input
              type='text'
              name='mobile'
              className='form-control'
              value={inputData.mobile}
              onChange={(e) => setInputdata({ ...inputData, mobile: e.target.value })} 
            />
          </div>
          <br />
          <button className='btn btn-dark'>Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
