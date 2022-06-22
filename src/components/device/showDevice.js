import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link, useHistory, useParams} from 'react-router-dom';

const ShowDevice = () => {
    let history = useHistory();
    const {id} = useParams();
    const [devices, setDevice] = useState({
        uid: "",
        vendor: "",
        status: "",
        createdAt: "",
    });
    useEffect(() => {
        loadDevice();
    }, []);

    const loadDevice = async ()=>{
       const result = await axios.get(`http://localhost:5000/v1/api/device/${id}`);
        setDevice(result.data);
    };

    return (
        <div className="container">
            <Link className="btn btn-primary mt-2 ml-2" to={`/gateway/device/${id}`}>
                Back
            </Link>
            <h1 className="display-4">Device</h1>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item">UID: {devices.uid}</li>
                <li className="list-group-item">Vendor: {devices.vendor}</li>
                <li className="list-group-item">status: {devices.status}</li>
                <li className="list-group-item">Date: {devices.createdAt}</li>
            </ul>
        </div>
    )
};

export default ShowDevice;
