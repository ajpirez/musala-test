import React from 'react';

import Users from './components/pages/users';
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';
import Navbar from './components/layout/Navbar';
import ShowUser from "./components/user/showUser";
import EditUser from "./components/user/EditUser";
import AddRolToUser from "./components/rol/AddRolToUser";
import DeleteRolToUser from "./components/rol/DeleteRolToUser";



import Gateway from './components/pages/Gateway';
import AddGateway from "./components/gateway/AddGateway";
import EditGateway from "./components/gateway/EditGateway";
import ShowGateway from "./components/gateway/ShowGateway";

import NotFound from "./components/pages/NotFound";

// import Estudiantes from './components/pages/estudiante';
// import AddStudent from "./components/estudent/AddStudent";
// import EditStudent from "./components/estudent/EditStudent";
// import ShowStudent from "./components/estudent/showStudent";



import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path="/signIn" component={SignIn}/> />
                    <Route exact path="/signUp" component={SignUp}/>
                    <Route exact path="/users" component={Users}/>
                    <Route exact path="/user/show/:id" component={ShowUser}/>
                    <Route exact path="/user/edit/:id" component={EditUser}/>
                    <Route exact path="/rol/addRolToUser/:username/:rolId" component={AddRolToUser}/>
                    <Route exact path="/rol/deleteRolToUser/:username/:rolId" component={DeleteRolToUser}/>

                    <Route exact path="/gateway" component={Gateway}/>
                    <Route exact path="/gateway/add" component={AddGateway}/>
                    <Route exact path="/gateway/show/:id" component={ShowGateway}/>
                    <Route exact path="/gateway/edit/:id" component={EditGateway}/>

                    {/*<Route exact path="/estudiantes" component={Estudiantes}/>*/}
                    {/*<Route exact path="/students/add" component={AddStudent}/>*/}
                    {/*<Route exact path="/students/show/:id" component={ShowStudent}/>*/}
                    {/*<Route exact path="/students/edit/:id" component={EditStudent}/>*/}

                    {/*<Route exact path="/grupos/students/:id/:curso" component={Group_students}/>*/}

                    {/*<Route exact path="/" component={Estudiantes}/>*/}
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
