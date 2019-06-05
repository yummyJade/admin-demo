import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Menu from './components/Sidebar/Menu'
import RegisteredUser from './components/Content/RegisteredUser';
import RegisterInUser from './components/Content/RegisterInUser';
import Jsdemob from './app/jsdemob';
import Jsdemoc from './app/jsdemoc';
import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";
import './components/Content/Content.css';
import Model from './components/Model/Model';
// const routes = [
//     {
//         path: "/",
//         exact: true,
//         sidebar: () =>Jsdemo,
//         main: () => Jsdemo
//     },
//     {
//         path: "/Jsdemob",
//         sidebar: () => Jsdemob,
//         main: () => Jsdemob
//     },
//     {
//         path: "/Jsdemoc",
//         sidebar: S() => <div>Jsdemoc</div>,
//         main: 'Jsdemoc'
//     }
// ];
function Routers(){
    return(
        <Router >

                <TopBar/>
                <Menu/>
                <div className="right-content">
                    <Route>
                        <Route  exact path="/" component={ RegisteredUser } />
                        <Route  path="/RegisterInUser" component={RegisterInUser} />
                        <Route  path="/Jsdemoc" component={Jsdemoc} />
                    </Route>
                </div>

                <Footer/>



        </Router>
    )
}

export default Routers;