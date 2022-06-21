import React, {useEffect, useState} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import axios from 'axios';

const EditStudent = () => {
    let history = useHistory();
    const {id} = useParams();
    const [profesores, setProfesores] = useState([]);
    const [grup, setGrup] = useState({
        nombre: "",
        profesor_id:"",
    });
    useEffect(() => {
        loadProfesores();
        loadGrupo();
    }, []);

    const loadProfesores = async () => {
        const result = await axios.get('http://localhost:3001/profesores');
        setProfesores(result.data);
        console.log(result);
    };

    const onInputChange = e=>{
        setGrup({...grup,[e.target.name]: e.target.value})
    };
    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:3001/grupos/${id}`, grup);
        history.push('/grupos')
    };

    const loadGrupo = async ()=>{
        const result = await axios.get(`http://localhost:3001/grupos/${id}`);
        setGrup(result.data[0]);
    };

    const {nombre, profesor_id } = grup;
    return (
        <div className="container">
            <Link className="btn btn-primary mt-2 ml-2" to="/grupos">
                Volver
            </Link>
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Modificar Grupo</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Entre su nombre"
                            name="nombre"
                            value={nombre}
                            required
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <select name="profesor_id" className="form-control form-control-lg"
                                aria-label="Default select example" value={profesor_id}  onChange={e => onInputChange(e)}>
                            {
                                profesores.map((profesor, index) => (
                                    <option value={profesor.profesor_id}>{profesor.nombre}</option>
                                ))
                            }
                            }
                        </select>
                    </div>
                    <button className="btn btn-warning btn-block">Update Grupo</button>
                </form>
            </div>
        </div>
    )
};

export default EditStudent;
