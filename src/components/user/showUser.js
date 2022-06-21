import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link, useHistory, useParams} from 'react-router-dom';

const ShowUser = () => {
    let history = useHistory();
    const {id} = useParams();
    const [user, setUser] = useState({
        rol: [],
        _id: "",
        name: "",
        username: "",
    });

    const [rols, setRol] = useState([])
    useEffect(() => {
        const config = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        loadUser(config);
    }, []);

    const loadUser = async (config) => {
        let result = await axios.get(`http://localhost:5000/v1/api/user/${id}`, config)
        setUser(result.data);
        setRol(result.data.rols);
    };
    // const loadRol = async () => {
    //     let result = await axios.get(`http://localhost:5000/v1/api/user/${id}`)
    //     setRol(result.data.rols);
    // };

    return (
        <div className="container">
            <Link className="btn btn-primary mt-2 ml-2" to="/estudiantes">
                back
            </Link>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item">Name: {user.name}</li>
                <li className="list-group-item">Username: {user.username}</li>
            </ul>
            <table className="table border shadow">
                <tbody>
                <h1 className="display-7 mt-3">Rols </h1>
                {
                    rols.map((rol, index) => (
                        <tr key={index}>
                            <th scoped="row">{index + 1}</th>
                            <td>{rol.type}</td>
                            <td>
                                    <span className="d-inline-block" tabIndex="0" data-bs-toggle="tooltip"
                                          title="Add Rol To User">
                                    <Link class="btn btn-primary mr-2" to={`/rol/addRolToUser/${user.username}/${rol._id}`}>
                                        <i className="fa fa-book"></i>
                                    </Link>
                                    </span>
                                <span className="d-inline-block" tabIndex="0" data-bs-toggle="tooltip"
                                      title="Delete Rol to User">
                                     <Link class="btn btn-danger"
                                           to={`/rol/addRolToUser/${user.username}/${rol._id}`}>
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
    )
};

export default ShowUser;
