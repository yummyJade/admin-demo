import './RegisterInUser.css';
import React,{useState,useEffect}from 'react';
import '../../utils/lulu/theme/peak/css/common/common.css';
import ExcelUtil from '../../utils/excelUtil';
import Model from '../../components/Model/Model';

const modelRoot = document.getElementById('model-root');
// computed: record => record.org.substring(6),

    const initColumn = [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        className: 'text-monospace',
    }, {
        title: '年级',
        dataIndex: 'grade',
        key: 'grade',
    }, {
        title: '部门',
        dataIndex: 'department',
        key: 'department',
    }];


let attendanceInfoList = [
    {
        name:"张三",
        grade:"2017级",
        department:"前端部门"

    },
    {
        name:"李四",
        grade:"2017级",
        department:"程序部门"

    }];

function RegisterInUser() {
    const [isShowPop,changeShowPop] = useState(false);
    useEffect(()=>{
        axios.get('/user', {
            params: {
                ID: 12345
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    })
    function handleInClick(){
        changeShowPop(!isShowPop);
    }
    return(
        <React.Fragment>
            {(isShowPop == true)?<Model isShow={isShowPop} closeModel={handleInClick}/>:null}


            <button className="ui-button ui-button-primary"  onClick={handleInClick}>导入人员</button>
            <button
                className="ui-button ui-button-primary outExcelBtn"
                type="primary"
                onClick={() => {ExcelUtil.exportExcel(initColumn, attendanceInfoList,"人员名单.xlsx")}}>
                导出表格
            </button>


        </React.Fragment>
    )
}

export default RegisterInUser;