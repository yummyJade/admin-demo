import React,{ useState, useEffect } from 'react';
import { NavLink , Link } from 'react-router-dom';
import SubMenuItem from './SubMenuItem';
import './Menu.css';
import { StyleSheet, css } from 'aphrodite';
import { slideUpReturn   } from 'react-magic';

function MenuItem(props){
    return(
        <React.Fragment>
            <li>
                <NavLink to={ props.url } onClick ={ props.onMouseClick} >{ props.text }</NavLink>
                {

                    <ul className="sub-menu">
                        { props.submenu.map((submenuitem,index) =>(
                            (props.MenuItemIndex == props.index)?
                            <SubMenuItem text={ submenuitem.text } url ={ submenuitem.url } SubMenuIndex = {props.SubMenuIndex}/>
                            :null
                        ))
                        }
                    </ul>
                }
            </li>
        </React.Fragment>
    )
}
export default MenuItem;

