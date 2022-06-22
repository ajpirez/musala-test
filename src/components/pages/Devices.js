import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';


const Devices = () => {
    const {GatewayId} = useParams();
    const [devices, setDevices] = useState([]);
    useEffect(() => {
        loadDevices();
    }, []);

    const loadDevices = async () => {
        const result = await axios.get('http://localhost:5000/v1/api/device');
        setDevices(result.data.reverse());
    };

    const deleteDeviceFromGateway = async (gatewayId, deviceId) => {
        await axios.patch(`http://localhost:5000/v1/api/device/deleteDeviceFromGateway/${gatewayId}`, {deviceId});
        loadDevices();
    };

    return (
        <div className="container">
            <div className="py-4">
                <h1>Devices</h1>
                <Link className="btn btn-outline-light mb-2 bg-primary " to={`/device/add/${GatewayId}`}>Add Device To
                    Gateway</Link>
                <table className="table border shadow">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">UID</th>
                        <th scope="col">Vendor</th>
                        <th scope="col">Status</th>
                        <th scope="col">Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        devices.map((device, index) => (
                            <tr>
                                <th scoped="row">{index + 1}</th>
                                <td>{device.uid}</td>
                                <td>{device.vendor}</td>
                                <td>{device.status}</td>
                                <td>{device.date}</td>
                                <td>
                                    <span className="d-inline-block" tabIndex="0" data-bs-toggle="tooltip"
                                          title="Show Device">
                                    <Link class="btn btn-primary mr-2" to={`/device/show/${device._id}`}>
                                        <i className="fa fa-book"></i>
                                    </Link>
                                    </span>
                                    <span className="d-inline-block" tabIndex="0" data-bs-toggle="tooltip"
                                          title="Delete Device">
                                    <Link to={'#'} class="btn btn-danger"
                                          onClick={() => deleteDeviceFromGateway(GatewayId, device._id)}>
                                        <i className="fa fa-book"></i>
                                    </Link>
                                    </span>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Devices;
