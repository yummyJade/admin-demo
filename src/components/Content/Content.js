import React,{useState,useEffect} from 'react';
import './Content.css';
import Jsdemo from '../../app/jsdemo';
import Jsdemob from '../../app/jsdemob';
import Jsdemoc from '../../app/jsdemoc';
import { BrowserRouter as Router , Route , Link} from 'react-router-dom';

function Content(){
    return(

            <Router>
            <div className="right-content">这是内容</div>
                <Route exact path="/" component={Jsdemo} />
                <Route  path="/Jsdemob" component={Jsdemob} />
                <Route  path="/Jsdemoc" component={Jsdemoc} />


            </Router>

    )
}

export default Content;