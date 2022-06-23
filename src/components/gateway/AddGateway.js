import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const AddGateway = () => {
    let history = useHistory();
    const [error, setError] = useState(<div/>)

    const [gateway, setGateway] = useState({
        serialNumber: "",
        name: "",
        address: "",
    });


    const onInputChange = e => {
        setGateway({...gateway, [e.target.name]: e.target.value})
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`${process.env.REACT_APP_URL}v1/api/gateway`, gateway)
            .then(()=>{
                history.push('/gateway')
            })
            .catch(()=>{
                setTimeout(() => {
                    setError(<div className="alert alert-danger miAlert" role="alert">
                        Error validation
                    </div>)
                }, 1000)
                setTimeout(() => {
                    setError(<div></div>)
                }, 5000)
            })
    }
    const {serialNumber, name, address} = gateway;
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add Gateway</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Serial Number"
                            name="serialNumber"
                            value={serialNumber}
                            required
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Name"
                            name="name"
                            value={name}
                            required
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Ipv4 Address"
                            name="address"
                            value={address}
                            required
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block">Add gateway</button>
                </form>
            </div>
            {error}
        </div>
    )
};

export default AddGateway;
