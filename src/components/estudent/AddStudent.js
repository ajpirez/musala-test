import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';

const AddStudent = () => {
    let history = useHistory();
    const [ciudades, setCiudad] = useState([]);
    const [grupos, setGrupos] = useState([]);
    const [estudiante, setEstudiante] = useState({
        nombre: "",
        edad: "",
        sexo: "",
        email: "",
        fecha_nacim: "",
        ciudad_nacim_id: "",
        grupo_id: ""
    });
    useEffect(() => {
        loadCiudades();
        loadGrupos();
    }, []);

    const loadCiudades = async () => {
        const result = await axios.get('http://localhost:3001/ciudades');
        setCiudad(result.data);
    };
    const loadGrupos = async () => {
        const result = await axios.get('http://localhost:3001/grupos');
        setGrupos(result.data);
    };

    const onInputChange = e=>{
        setEstudiante({...estudiante,[e.target.name]: e.target.value})
    }
    const onSubmit = async (e) =>{
        console.log(estudiante);
        e.preventDefault();
        await axios.post('http://localhost:3001/create/estudiante', estudiante);
        history.push('/estudiantes')
    }

    const {nombre, edad, sexo, email, fecha_nacim, ciudad_nacim_id, grupo_id } = estudiante;
    return (
        <div className="container">
            <Link className="btn btn-primary mt-2 ml-2" to="/estudiantes">
                Volver
            </Link>
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Adicionar Estudiante</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Entre su nombre"
                            name="nombre"
                            required
                            value={nombre}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="number"
                            className="form-control form-control-lg"
                            placeholder="Entre su edad"
                            min="5"
                            max="50"
                            required
                            name="edad"
                            value={edad}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <label htmlFor="sexo">Sexo</label>
                    <div className="form-group">
                        <div className="form-control">
                            <input required className="form-check-input" value="F" type="radio" name="sexo" id="F" onChange={e => onInputChange(e)}/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Femenino
                            </label>
                        </div>
                        <div className="form-control">
                            <input required className="form-check-input" value="M" type="radio" name="sexo" id="M" onChange={e => onInputChange(e)}/>
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Masculino
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Entre su correo"
                            name="email"
                            required
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="date"
                            className="form-control form-control-lg"
                            placeholder="Entre su fecha de nacimiento"
                            name="fecha_nacim"
                            value={fecha_nacim}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <select required aria-required="true" required name="ciudad_nacim_id" className="form-control form-control-lg"
                                aria-label="Default select example" value={ciudad_nacim_id} onChange={e => onInputChange(e)}>
                            <option value="">Seleccione su ciudad de nacimiento</option>
                            {
                                ciudades.map((ciudad, index) => (
                                    <option value={ciudad.ciudad_id}>{ciudad.nombre}</option>
                                ))
                            }
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <select required aria-required="true" id="grupo_id" name="grupo_id" className="form-control form-control-lg"
                                aria-label="Default select example"  value={grupo_id} onChange={e => onInputChange(e)}>
                                <option value="">Seleccione su grupo</option>
                            {
                                grupos.map((grupo, index) => (
                                    <option value={grupo.grupo_id}>{grupo.nombre}</option>
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

export default AddStudent;
