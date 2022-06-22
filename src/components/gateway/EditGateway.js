import React, {useEffect, useState} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import axios from 'axios';

const EditGateway = () => {
    let history = useHistory();
    const {id} = useParams();
    const [gateway, setGateway] = useState({
        serialNumber: "",
        name: "",
        address: "",
    });

    useEffect(() => {
        loadGateway();
    }, []);

    const loadGateway = async () => {
        const result = await axios.get(`http://localhost:5000/v1/api/gateway/${id}`);
        setGateway(result.data);
    };

    const onInputChange = e => {
        setGateway({...gateway, [e.target.name]: e.target.value})
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/v1/api/gateway/${id}`, {
            serialNumber: gateway.serialNumber,
            name: gateway.name,
            address: gateway.address
        });
        history.push('/gateway')
    };


    const {serialNumber, name, address} = gateway;
    return (
        <div className="container">
            <Link className="btn btn-primary mt-2 ml-2" to="/gateway">
                Back
            </Link>
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit Gateway</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Serial Number"
                            name="serialNumber"
                            value={serialNumber}
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
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-warning btn-block">Edit Gateway</button>
                </form>
            </div>
        </div>
    )
};

export default EditGateway;
