import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import '../../App.css'

const SignIn = () => {
    let history = useHistory();
    const [error, setError] = useState(<div/>)
    const [user, setUser] = useState({
        username: "",
    });


    const onInputChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        const base64EncodedPw = btoa(user.username + ':' + user.password);
        await axios.post(`${process.env.REACT_APP_URL}v1/api/auth/signin`, user, {
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Basic ' + base64EncodedPw,
            }
        }).then(res => {
            localStorage.setItem('token', res.data.token)
            window.location.reload()
            // window.location.href = `
            // ${process.env.REACT_APP_URL}`
        }).catch(error => {
            setTimeout(()=>{
                setError(<div className="alert alert-danger miAlert" role="alert">
                    Sign In Error
                </div>)
            },1000)

            setTimeout(()=>{
                setError(<div></div>)
            },5000)
        })
    }

    const {username, password} = user;
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Sign In</h2>
                <form onSubmit={e => onSubmit(e)}>
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
            {error}
        </div>
    )
};

export default SignIn;