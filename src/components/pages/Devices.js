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
        console.log(GatewayId)
        const result = await axios.get(`${process.env.REACT_APP_URL}v1/api/gateway/${GatewayId}`);
        setDevices(result.data.devices);
    };

    const deleteDeviceFromGateway = async (gatewayId, deviceId) => {
        await axios.patch(`${process.env.REACT_APP_URL}v1/api/device/deleteDeviceFromGateway/${GatewayId}`, {deviceId});
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
                                <td>{device.createdAt.substring(0,10)}</td>
                                <td>
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
