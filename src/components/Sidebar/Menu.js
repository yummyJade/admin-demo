import React,{ useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import './Menu.css';
import {Link} from "react-router-dom";

const menuitems = [
    {
        url:'/',
        text:'申请用户管理',
        submenu: [
            {
                text: '已注册用户列表',
                url: 'http://qq.com',
            },
            {
                text: '注册用户验证列表',
                url: '/RegisterInUser',
            },
        ]
    },
    {
        url:'',
        text:'预约管理',
        submenu:[

        ]
    },
    {
        url:'',
        text:'修改个人信息',
        submenu:[

        ]
    },
    {
        url:'',
        text:'管理员管理',
        submenu:[
            {
                url:'',
                text:'管理员列表'
            },
            {
                url:'',
                text:'收件人管理'
            }
        ]
    },
    {
        url:'',
        text:'锁定管理',
        submenu:[
            {
                url:'',
                text:'锁定列表'
            },
            {
                url:'',
                text:"添加锁定"
            }
        ]
    },
    {
        url:'/Jsdemob',
        text:'测试',
        submenu:[

        ]
    },
]
function Menu(){
    // const [menus,setmenu] = useState([]);
    //记录当前菜单选中状态
    const [ MenuItemIndex , SetMenuItemIndex ] = useState(-1);
    const [ SubMenuIndex , SetSubMenuIndex ] = useState(-1);
    //鼠标从一级菜单上略过
    function handleMenuItemClick(index){
        if(MenuItemIndex == index){
            SetMenuItemIndex(-1);
        }else{
            SetMenuItemIndex(index);
        }
        console.log(MenuItemIndex)

    }

    function handleSubMenuHover(index, e){
        SetSubMenuIndex(index);
    }
    function handleSubMenuLeave(){
        SetSubMenuIndex(-1);
    }

    return(
        <div className="left-nav">
            { menuitems.map((menuitem,index) =>(
            <MenuItem
                index = {index}
                text ={ menuitem.text }
                url ={ menuitem.url }
                submenu = { menuitem.submenu }
                onMouseClick = {() => { handleMenuItemClick(index) }}

                onSubItemMouseOver={(e) => { handleSubMenuHover(index, e) }}
                onSubItemMouseLeave={ handleSubMenuLeave}
                MenuItemIndex = {MenuItemIndex}
                SubMenuIndex = {SubMenuIndex}
            />
        ))}

        </div>
    )
}
export default Menu;