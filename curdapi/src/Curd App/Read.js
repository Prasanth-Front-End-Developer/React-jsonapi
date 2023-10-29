import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Read = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [Data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3030/users/' + id)
            .then((res) => setData([res.data])) 
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <div className='container'>
            {Data.map((d) => (
                <div className='card bg-light mt-5' key={d.id}>
                    <div className='card-body'>
                        <h5 className='card-title'>User Details</h5>
                        <p>ID: {d.id}</p>
                        <p>Name: {d.name}</p>
                        <p>Email: {d.email}</p>
                        <p>Mobile: {d.mobile}</p>
                        <Link to="/home" className=' btn btn-sm btn-primary'>Back</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Read;
