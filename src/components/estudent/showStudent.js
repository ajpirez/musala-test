import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link, useHistory, useParams} from 'react-router-dom';

const ShowStudent = () => {
    let history = useHistory();
    const {id} = useParams();
    const [estudiante, setEstudiante] = useState({
        estudiante_id: "",
        nombre: "",
        edad: "",
        sexo: "",
        email: "",
        fecha_nacim: "",
        ciudad_id: "",
        grupo_id: "",
        ciudad: "",
        grupo: ""

    });
    useEffect(() => {
        loadEstudiante();
    }, []);

    const loadEstudiante = async ()=>{
       const result = await axios.get(`http://localhost:3001/estudiante/${id}`);
       console.log(result);
       setEstudiante(result.data[0]);
    };

    return (
        <div className="container">
            <Link className="btn btn-primary mt-2 ml-2" to="/estudiantes">
                Volver
            </Link>
            <h1 className="display-4">User Id: {estudiante.estudiante_id} </h1>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item">Nombre: {estudiante.nombre}</li>
                <li className="list-group-item">Edad: {estudiante.edad}</li>
                <li className="list-group-item">Sexo: {estudiante.sexo}</li>
                <li className="list-group-item">Email: {estudiante.email}</li>
                <li className="list-group-item">Fecha de Nacimiento: {estudiante.fecha_nacim}</li>
                <li className="list-group-item">Ciudad: {estudiante.ciudad}</li>
                <li className="list-group-item">Grupo: {estudiante.grupo}</li>
            </ul>
        </div>
    )
};

export default ShowStudent;
