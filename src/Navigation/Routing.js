import React from "react"
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";

const Routing =()=>{
    return(
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/profile" component={Profile}/>
    </Switch>
    </BrowserRouter>
    )
}
export default Routing;