import React from 'react';


import Users from './components/pages/Users';
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

import Devices from './components/pages/Devices';
import AddDeviceToGateway from "./components/device/AddDeviceToGateway";

import NotFound from "./components/pages/NotFound";


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


                    <Route exact path="/gateway/device/:GatewayId" component={Devices}/>
                    <Route exact path="/device/add/:GatewayId" component={AddDeviceToGateway}/>
                    <Route exact path="/" component={Gateway}/>

                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
