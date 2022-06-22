import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const AddGateway = () => {
    let history = useHistory();
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
        await axios.post('http://localhost:5000/v1/api/gateway', gateway);
        history.push('/gateway')
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
        </div>
    )
};

export default AddGateway;
