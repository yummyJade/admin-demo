import React from 'react';
import Router from './Router';
import './App.css';
import Model from "./components/Model/Model";
function App(){
    return(
        <React.Fragment>
            <div id={"app-root"}>
                <Router/>

            </div>

            <div id={"model-root"}></div>
        </React.Fragment>
    )
}
export default App;