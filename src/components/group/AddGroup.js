import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const AddGroup = () => {
    let history = useHistory();
    const [profesores, setProfesores] = useState([]);
    const [grup, setGrup] = useState({
        nombre: "",
        profesor_id:"",
    });
    useEffect(() => {
        loadProfesores();
    }, []);

    const loadProfesores = async () => {
        const result = await axios.get('http://localhost:3001/profesores');
        setProfesores(result.data);
        console.log(result);
    };

    const onInputChange = e=>{
        setGrup({...grup,[e.target.name]: e.target.value})
    }
    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.post('http://localhost:3001/create/grupo', grup);
        history.push('/grupos')
    }
    const {nombre, profesor_id } = grup;
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Adicionar Grupo</h2>
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
                        <select required aria-required="true" name="profesor_id" className="form-control form-control-lg"
                                aria-label="Default select example" value={profesor_id}  onChange={e => onInputChange(e)}>
                            <option value="">Seleccione su profesor guía</option>
                            {
                                profesores.map((profesor, index) => (
                                    <option value={profesor.profesor_id}>{profesor.nombre}</option>
                                ))
                            }
                            }
                        </select>
                    </div>
                    <button className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>
        </div>
    )
};

export default AddGroup;
