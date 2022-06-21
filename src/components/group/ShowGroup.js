import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link, useHistory, useParams} from 'react-router-dom';

const ShowGroup = () => {
    let history = useHistory();
    const {id} = useParams();
    const [grup, setGrup] = useState({
        nombre: "",
        profesor_id:"",
        profesor: "",
        grupo_id: ""
    });
    useEffect(() => {
        loadGrupo()
    }, []);

    const loadGrupo = async ()=>{
        const result = await axios.get(`http://localhost:3001/grupos/${id}`);
        setGrup(result.data[0]);
    };

    return (
        <div className="container">
            <Link className="btn btn-primary mt-2 ml-2" to="/grupos">
                Volver
            </Link>
            <h1 className="display-4">User Id: {id} </h1>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item"><small>Nombre: {grup.nombre}</small></li>
                <li className="list-group-item"><strong>Profesor: {grup.profesor}</strong></li>
            </ul>
        </div>
    )
};

export default ShowGroup;
