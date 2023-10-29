import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [data, setData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3030/users')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='container mt-5'>
            <div className='d-flex justify-content-center mt-2'>
                <h3>Employee List</h3>
            </div>
            <Link to="/create" className='btn btn-success my-3'>Create +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>MOBILE</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => (
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.email}</td>
                            <td>{d.mobile}</td>
                            <td>
                                <Link className='text-decoration-none btn btn-sm btn-success me-2' to={`/update/${d.id}`}>Update</Link>
                                <button className='text-decoration-none btn btn-sm btn-danger me-2' onClick={e => handleDelete(d.id)}>Delete</button>
                                <Link className='text-decoration-none btn btn-sm btn-primary' to={`/read/${d.id}`}>Read</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    function handleDelete(id) {
        const confirm = window.confirm("Do you like to Delete?");
        if (confirm) {
            axios.delete('http://localhost:3030/users/' + id)
                .then(res => {
                    alert("Record Deleted");
                    navigate('/home')
                })
        }
    }
}

export default Home;
