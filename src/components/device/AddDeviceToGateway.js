import React, {useEffect, useState} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import axios from 'axios';

const AddDeviceToGateway = () => {
    let history = useHistory();
    const [error, setError] = useState(<div/>)

    const {GatewayId} = useParams();
    const [devices, setDevice] = useState({
        uid: "",
        vendor: "",
        status: "",
    });

    const onInputChange = e => {
        setDevice({...devices, [e.target.name]: e.target.value})
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.patch(`${process.env.REACT_APP_URL}v1/api/device/addDeviceToGateway/${GatewayId}`, devices)
            .then(()=>{
                history.push(`/gateway/device/${GatewayId}`)

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

    const {uid, vendor, status} = devices;
    return (
        <div className="container">
            <Link className="btn btn-primary mt-2 ml-2" to="/gateway">
                Back
            </Link>
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add a Device</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="number"
                            className="form-control form-control-lg"
                            placeholder="UID"
                            name="uid"
                            required
                            value={uid}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Vendor"
                            name="vendor"
                            value={vendor}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <select required aria-required="true" name="status"
                                className="form-control form-control-lg"
                                aria-label="Default select example" value={status}
                                onChange={e => onInputChange(e)}>
                            <option value="">Select a status</option>
                            <option value="online">Online</option>
                            <option value="offline">Offline</option>

                        </select>
                    </div>
                    <button className="btn btn-primary btn-block">Add Device</button>
                </form>
            </div>
            {error}
        </div>
    )
};

export default AddDeviceToGateway;
