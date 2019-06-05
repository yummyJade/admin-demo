import React,{useState,useEffect} from 'react';
import './Model.css';
import ReactDOM from "react-dom";
import ExcelUtil from '../../utils/excelUtil';


function Content(props) {
    return(
        <div className={'cover'}>
            <button onClick={props.closeModel}>关闭</button>
            <input type='file' accept='.xlsx, .xls' onChange={(e)=>{ExcelUtil.importExcel(e)} }/>

        </div>
    )
}

function Model(props){
    const appRoot = document.getElementById('app-root');
    const modelRoot = document.getElementById('model-root');
    const [el,changEl] = useState(document.createElement('div'));

    //初始化工作
    useEffect(()=>{

        modelRoot.appendChild(el);

    },[])
    //清理工作
    useEffect(()=>{
        return ()=>{
            modelRoot.innerHTML="";

        }
    })
    return ReactDOM.createPortal((
        <Content closeModel={props.closeModel}/>
    ), el);
}

export default Model;