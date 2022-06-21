import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link, useHistory, useParams} from 'react-router-dom';

const Group_students = () => {
    let history = useHistory();
    let cursoName = "";
    const {id, curso} = useParams();
    const [estudiantesAll, setestudiantesAll] = useState([]);
    useEffect(() => {
        loadGrupStudents()
    }, []);

    const loadGrupStudents = async ()=>{
        const result = await axios.get(`http://localhost:3001/grupos/students/${id}`);
        setestudiantesAll(result.data);
        console.log(cursoName);
    };

    return (
        <div className="container">
            <Link className="btn btn-primary mt-2 ml-2" to="/grupos">
                Volver
            </Link>
            <h1 className="display-4">Estudiantes del Curso : {curso}  </h1>
            <hr/>
            <table className="table table-dark table-striped">
                <thead className="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Sexo</th>
                    <th scope="col">Email</th>
                </tr>
                </thead>
                <tbody>
                {
                    estudiantesAll.map((estudent, index) => (
                        <tr>
                            <th scoped="row">{index + 1}</th>
                            <td>{estudent.nombre}</td>
                            <td>{estudent.edad}</td>
                            <td>{estudent.sexo}</td>
                            <td>{estudent.email}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
};

export default Group_students;
