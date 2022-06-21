import React from 'react';
import './App.css';
import './index.css';
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';
import Grupo from './components/pages/Grupo';
import Estudiantes from './components/pages/estudiante';
import Users from './components/pages/users';
import Navbar from './components/layout/Navbar';
import NotFound from './components/pages/NotFound';
import AddStudent from "./components/estudent/AddStudent";
import EditStudent from "./components/estudent/EditStudent";
import ShowStudent from "./components/estudent/showStudent";
import AddGroup from "./components/group/AddGroup";
import EditGroup from "./components/group/EditGroup";
import ShowGroup from "./components/group/ShowGroup";
import ShowUser from "./components/user/showUser";
import AddRolToUser from "./components/rol/AddRolToUser";
import DeleteRolToUser from "./components/rol/DeleteRolToUser";

import Group_students from "./components/Group_students/group_studentes";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path="/signIn" component={SignIn}/> />
                    <Route exact path="/signUp" component={SignUp}/>
                    <Route exact path="/estudiantes" component={Estudiantes}/>
                    <Route exact path="/students/add" component={AddStudent}/>
                    <Route exact path="/students/show/:id" component={ShowStudent}/>
                    <Route exact path="/students/edit/:id" component={EditStudent}/>
                    <Route exact path="/grupos" component={Grupo}/>
                    <Route exact path="/grupos/add" component={AddGroup}/>
                    <Route exact path="/grupos/show/:id" component={ShowGroup}/>
                    <Route exact path="/grupos/edit/:id" component={EditGroup}/>
                    <Route exact path="/grupos/students/:id/:curso" component={Group_students}/>
                    <Route exact path="/users" component={Users}/>
                    <Route exact path="/user/show/:id" component={ShowUser}/>
                    <Route exact path="/rol/addRolToUser/:username/:rolId" component={AddRolToUser}/>
                    <Route exact path="/rol/deleteRolToUser/:username/:rolId" component={DeleteRolToUser}/>
                    <Route exact path="/" component={Estudiantes}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
