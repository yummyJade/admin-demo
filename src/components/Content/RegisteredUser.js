import React,{useState,useEffect} from 'react';
import '../../utils/lulu/theme/peak/css/common/ui/Table.css';
import '../../utils/lulu/theme/peak/css/common/comp/Table.css';
import '../../utils/lulu/theme/peak/css/common/ui.css';
import PageButton from "../../PageButton/PageButton";
import './RegisteredUser.css';


function RegisteredUser(){
    const [rusers,setrUser] = useState([]);
    let PageObj = {
        defaultfirst: 1,
        defaultAmount:6,
        totalPage:12
    }

    let array = [
        {
            username:'爱特工作室',
            email:'1234567@126.com',
            status:'通过'
        },
        {
            username:'爱特工作室',
            email:'123456sss7@126.com',
            status:'通过'
        }
    ]
    return(
        <React.Fragment>
            <div className="rel">

                <div className="table-top-right">
                    <form>
                        <div className="table-search ui-input ui-search-input">
                            <input type="search"/>
                                <a href="javascript:" className="ui-icon-search">搜索</a>
                        </div>
                        {/*<input type="submit" id="searchSubmit" className="clip"/>*/}
                        <label className="ui-button ui-button-primary" htmlFor="searchSubmit">搜索</label>


                    </form>
                </div>
            </div>
            <div className="table-x">
                <div className="table-size">
                    <table className="ui-table">
                        <tr>
                            <th scope="col">用户名</th>
                            <th scope="col">电子邮箱</th>
                            <th scope="col">状态</th>
                        </tr>
                        <tbody>
                        {
                            array.map((item,index) => {
                                return(
                                    <tr>
                                        <td>{ item.username }</td>
                                        <td>{ item.email }</td>
                                        <td>{ item.status }</td>
                                    </tr>
                                )
                            })
                        }

                        </tbody>
                    </table>
                    {/*<div className="table-null-x">*/}
                    {/*    <div className="table-null">暂无数据</div>*/}
                    {/*</div>*/}
                </div>
               {/*分页*/}

                <div className="table-page-x">
                    <PageButton PageObj={ PageObj }/>
               {/*     <div className="table-page"></div>*/}
                </div>
            </div>
        </React.Fragment>
    )
}

export default RegisteredUser;
// <label
// className="ui-button ui-button-primary" htmlFor="searchSubmit">