import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        password: "",
    });
    useEffect(() => {
        // loadCiudades();
        // loadGrupos();
    }, []);

    const onInputChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/v1/api/auth/signup', user)
            .then(res => {
                console.log(res)
                history.push('/estudiantes')
            }).catch(error => {
                console.log(error)
            })
        // history.push('/estudiantes')
    }

    const {name, username, password} = user;
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Sign Up</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Name"
                            name="name"
                            required
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Username"
                            name="username"
                            required
                            value={username}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Password"
                            name="password"
                            required
                            value={password}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
            <button className="btn btn-primary btn-block">Sign Up</button>
        </form>
</div>
</div>
)
};

export default SignUp;