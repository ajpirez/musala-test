import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const Estudiante = () => {
    const [estudiantes, setEstudiante] = useState([]);
    useEffect(() => {
        loadEstudents();
    }, []);

    const loadEstudents = async () => {
        const result = await axios.get('http://localhost:3001/estudiantes');
        setEstudiante(result.data.reverse());
    };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3001/estudiante/${id}`);
        loadEstudents();
    };

    return (
        <div className="container">
            <div className="py-4">
                <h1>Estudiantes</h1>
                <Link className="btn btn-outline-light mb-2 bg-primary " to="/students/add">Adicionar Estudiante</Link>
                <table className="table border shadow">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Sexo</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        estudiantes.map((estudent, index) => (
                            <tr>
                                <th scoped="row">{index + 1}</th>
                                <td>{estudent.nombre}</td>
                                <td>{estudent.edad}</td>
                                <td>{estudent.sexo}</td>
                                <td>
                                    <span className="d-inline-block" tabIndex="0" data-bs-toggle="tooltip"
                                          title="Ver estudiante">
                                    <Link class="btn btn-primary mr-2" to={`/students/show/${estudent.estudiante_id}`}>
                                        <i className="fa fa-book"></i>
                                    </Link>
                                    </span>
                                    <span className="d-inline-block" tabIndex="0" data-bs-toggle="tooltip"
                                          title="Editar estudiante">
                                    <Link class="btn btn-outline-primary mr-2"
                                          to={`/students/edit/${estudent.estudiante_id}`}>
                                        <i className="fa fa-book"></i>
                                    </Link>
                                    </span>
                                    <span className="d-inline-block" tabIndex="0" data-bs-toggle="tooltip"
                                          title="Eliminar estudiante">
                                    <Link class="btn btn-danger"
                                          onClick={() => deleteUser(estudent.estudiante_id)}>
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
        </div>
    )
};

export default Estudiante;
