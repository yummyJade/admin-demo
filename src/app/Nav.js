import React, { useState, useEffect} from 'react';

import { NavLink , Link } from 'react-router-dom';
function Nav(){
    return(
        <React.Fragment>
            <div>
                <div>
                    <Link exact to='/'>Jsdemoa</Link> |&nbsp;
                    <Link to='/Jsdemob'>Jsdemob</Link> |&nbsp;
                    <Link to='/Jsdemoc'>Jsdemoc</Link>
                </div>
            </div>
        </React.Fragment>

    )
}
export default Nav;