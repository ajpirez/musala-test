import React, {useState, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import axios from 'axios';


const Grupo = () => {

    const [grupos, setGrupo] = useState([]);
    useEffect(() => {
        loadGrupos();
    }, []);

    const loadGrupos = async () => {
        const result = await axios.get('http://localhost:3001/grupos');
        setGrupo(result.data.reverse());
    };

    const deleteGroup = async (id) => {
        await axios.delete(`http://localhost:3001/grupos/${id}`);
        loadGrupos();
    };

    return (
        <div className="container">
            <div className="py-4">
                <h1>Grupos</h1>
                <Link className="btn btn-outline-light mb-2 bg-primary " to="/grupos/add">Adicionar Grupos</Link>
                <table className="table border shadow">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Profesor Guía</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        grupos.map((grupo, index) => (
                            <tr>
                                <th scoped="row">{index + 1}</th>
                                <td><NavLink className="nav-link" aria-current="page" exact
                                             to={`/grupos/students/${grupo.grupo_id}/${grupo.nombre}`}>{grupo.nombre}</NavLink>
                                </td>
                                <td>{grupo.profesor}</td>
                                <td>
                                    <span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip"
                                          title="Ver grupo">
                                    <Link class="btn btn-primary mr-2" to={`/grupos/show/${grupo.grupo_id}`}>
                                        <i className="fa fa-book"></i>
                                    </Link>
                                    </span>
                                    <span className="d-inline-block" tabIndex="0" data-bs-toggle="tooltip"
                                          title="Editar">
                                        <Link class="btn btn-outline-primary mr-2"
                                              to={`/grupos/edit/${grupo.grupo_id}`}><i
                                            className="fa fa-edit"></i> </Link>
                                    </span>

                                    <span className="d-inline-block" tabIndex="0" data-bs-toggle="tooltip"
                                          title="Eliminar">
                                        <Link class="btn btn-danger"
                                              onClick={() => deleteGroup(grupo.grupo_id)}><i
                                            className="fa fa-trash"></i></Link>
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

export default Grupo;
