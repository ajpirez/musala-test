import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

const ShowGateway = () => {
    const {id} = useParams();
    const [gateway, setGateway] = useState({
        serialNumber: "",
        name: "",
        address: "",
    });
    useEffect(() => {
        loadGateway()
    }, []);

    const loadGateway = async () => {
        console.log(id)
        const result = await axios.get(`http://localhost:5000/v1/api/gateway/${id}`);
        setGateway(result.data);
        console.log(gateway)
    };

    return (
        <div className="container">
            <Link className="btn btn-primary mt-2 ml-2" to="/gateway">
                Back
            </Link>
            <h1 className="display-4">Gateway </h1>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item"><small>Serial Number: {gateway.serialNumber}</small></li>
                <li className="list-group-item"><strong>Name: {gateway.name}</strong></li>
                <li className="list-group-item"><strong>Address: {gateway.address}</strong></li>
            </ul>
        </div>
    )
};

export default ShowGateway;
