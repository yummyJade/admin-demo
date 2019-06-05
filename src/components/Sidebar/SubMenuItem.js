import React,{ useState, useEffect } from 'react';
import { NavLink , Link } from 'react-router-dom';


function SubMenuItem(props){
    return(
        <React.Fragment>
            <li>
                <Link to={ props.url }>{ props.text }</Link>
            </li>
        </React.Fragment>
    )
}
export default SubMenuItem;