import React, {useEffect, useState} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import axios from 'axios';

const DeleteRolToUser = () => {
    let history = useHistory();
    const {username,rolId} = useParams();

    const [rol, setRol] = useState({
        type: "",
    });


    const onInputChange = e => {
        setRol({...rol, [e.target.name]: e.target.value})
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.patch(`${process.env.REACT_APP_URL}v1/api/rol/deleteRolToUser`, {username, rolName: rol.type})
            .then(res=>{
                history.push('/estudiantes')

            }).catch(error =>{
                history.push('/estudiantes')
            })
    }

    const {type} = rol;
    return (
        <div className="container">
            <Link className="btn btn-primary mt-2 ml-2" to={`/user/show/${rolId}`}>
                Back
            </Link>
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Delete a Rol to user</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Username"
                            name="username"
                            required
                            disabled
                            value={username}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <select required aria-required="true" required name="type"
                                className="form-control form-control-lg"
                                aria-label="Default select example" value={type} onChange={e => onInputChange(e)}>
                            <option value="">Select a rol</option>
                            <option value="Admin">Admin</option>
                            <option value="Client">Client</option>
                        </select>
                    </div>
                    <button className="btn btn-primary btn-block">Delete rolr</button>
                </form>
            </div>
        </div>
    )
};

export default DeleteRolToUser;
