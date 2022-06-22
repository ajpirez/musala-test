import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';


const Gateway = () => {
    let history = useHistory();
    const [gateways, setGateway] = useState([]);
    useEffect(() => {
        loadGateways();
    }, []);

    const loadGateways = async () => {
        const result = await axios.get('http://localhost:5000/v1/api/gateway');
        setGateway(result.data.reverse());
    };

    const deleteGateway = async (id) => {
        let data = await axios.delete(`http://localhost:5000/v1/api/gateway/${id}`)
        console.log(data)
    };

    return (
        <div className="container">
            <div className="py-4">
                <h1>Gateway</h1>
                <Link className="btn btn-outline-light mb-2 bg-primary " to="/gateway/add">Add Gateway</Link>
                <table className="table border shadow">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">SerialNumber</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        gateways.map((gateway, index) => (
                            <tr>
                                <th scoped="row">{index + 1}</th>
                                <td><Link className="nav-link" aria-current="page" exact
                                             to={`/gateway/device/${gateway._id}/${gateway.serialNumber}`}>{gateway.serialNumber}</Link>
                                </td>
                                <td>{gateway.name}</td>
                                <td>{gateway.address}</td>
                                <td>
                                    <span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip"
                                          title="Show">
                                    <Link class="btn btn-primary mr-2" to={`/gateway/show/${gateway._id}`}>
                                        <i className="fa fa-book"></i>
                                    </Link>
                                    </span>
                                    <span className="d-inline-block" tabIndex="0" data-bs-toggle="tooltip"
                                          title="Edit">
                                        <Link class="btn btn-outline-primary mr-2"
                                              to={`/gateway/edit/${gateway._id}`}><i
                                            className="fa fa-edit"></i> </Link>
                                    </span>

                                    <span className="d-inline-block" tabIndex="0" data-bs-toggle="tooltip"
                                          title="Delete">
                                       <Link class="btn btn-danger"
                                             onClick={() => deleteGateway(gateway._id)}>
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

export default Gateway;
