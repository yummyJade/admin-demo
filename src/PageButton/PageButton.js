import React,{useEffect,useState} from 'react';
import './PageButton.css';
function PageButton(props){
    const [PageStart,setPageStart] = useState(0);
    const [PageEnd,setPageEnd] = useState(props.PageObj.defaultAmount);
    const [totalPage,setTotalPage] = useState(props.PageObj.totalPage);
    const [defaultfirst,setDefaultFirst] = useState(props.PageObj.defaultfirst);
    const [nowPage,setNowPage] = useState(1);


    //初始化部分
    let temp = [];
    for(let i = PageStart; i < PageEnd; i++){
        temp.push(i+1);
    }
    const [items,setItems] = useState(temp);
    //defaultAmount
    function handleLastPageClick(){
        if(nowPage > 1){
            setNowPage(nowPage - 1);
            keepLastCenter(nowPage - 1)
        }

    }

    function handleNextPageClick(){

        if(nowPage < totalPage) {
            setNowPage(nowPage + 1);
            keepNextCenter(nowPage + 1)
        }

    }



    //保持居中
    function keepNextCenter(nowPage) {
        let centerEle = parseInt(props.PageObj.defaultAmount/2) + 1;
        let centerEle2 = parseInt(props.PageObj.defaultAmount/2) - 1;
        let centerEle3 = parseInt(props.PageObj.defaultAmount/2) - 2 ;
        if(props.PageObj.defaultAmount % 2 == 1){
            if(nowPage > centerEle && nowPage < totalPage-centerEle2 ){
                setPageStart(PageStart + 1);
                setPageEnd(PageEnd + 1);
                let temp = [];
                for(let i = PageStart+1; i < PageEnd+1; i++){
                    temp.push(i+1);
                }
                setItems(temp);
            }
        }else{
            if(nowPage > centerEle && nowPage < totalPage - centerEle3 ){
                setPageStart(PageStart + 1);
                setPageEnd(PageEnd + 1);
                let temp = [];
                for(let i = PageStart+1; i < PageEnd+1; i++){
                    temp.push(i+1);
                }
                setItems(temp);
            }
        }



    }
    function keepLastCenter(nowPage) {
        let centerEle = parseInt(props.PageObj.defaultAmount/2) + 1;
        let centerEle2 = parseInt(props.PageObj.defaultAmount/2) - 1;
        let centerEle3 = parseInt(props.PageObj.defaultAmount/2) - 2 ;
        if( props.PageObj.defaultAmount % 2 == 1){
            if(nowPage >= centerEle && nowPage <= totalPage-centerEle ){
                setPageStart(PageStart - 1);
                setPageEnd(PageEnd - 1);
                let temp = [];
                for(let i = PageStart-1; i < PageEnd-1; i++){
                    temp.push(i+1);
                }
                setItems(temp);
            }
        }else{
            if(nowPage >= centerEle && nowPage < totalPage - centerEle2 ){
                setPageStart(PageStart - 1);
                setPageEnd(PageEnd - 1);
                let temp = [];
                for(let i = PageStart-1; i < PageEnd-1; i++){
                    temp.push(i+1);
                }
                setItems(temp);
            }
        }



    }
    //点击后保持居中状态
    function keepClickCenter(nowPage) {
        let centerEle = parseInt(props.PageObj.defaultAmount/2) + 1;
        let centerEle1 = parseInt(props.PageObj.defaultAmount/2) ;
        let centerEle2 = parseInt(props.PageObj.defaultAmount/2) - 1;
        let centerEle3 = parseInt(props.PageObj.defaultAmount/2) - 2 ;
        if(props.PageObj.defaultAmount % 2 == 1){
            if(nowPage > centerEle1 && nowPage < totalPage-centerEle1 ){
                setPageStart(nowPage - centerEle);
                setPageEnd(nowPage + centerEle1);
                let temp = [];
                for(let i = nowPage - centerEle; i < nowPage + centerEle1; i++){
                    temp.push(i+1);
                }
                setItems(temp);
            }else if(nowPage <= centerEle1){
                setPageStart(0);
                setPageEnd(props.PageObj.defaultAmount);
                let temp = [];
                for(let i = 0; i < props.PageObj.defaultAmount ; i++){
                    temp.push(i+1);
                }
                setItems(temp);
            }else{
                setPageStart(totalPage - props.PageObj.defaultAmount);
                setPageEnd(totalPage);
                let temp = [];
                for(let i = totalPage - props.PageObj.defaultAmount; i < totalPage ; i++){
                    temp.push(i+1);
                }
                setItems(temp);
            }
        }else{
            if(nowPage > centerEle && nowPage < totalPage - centerEle3 ){
                setPageStart(nowPage - centerEle);
                setPageEnd(nowPage + centerEle2);
                let temp = [];
                for(let i = nowPage - centerEle; i < nowPage + centerEle2; i++){
                    temp.push(i+1);
                }
                setItems(temp);
            }else if(nowPage <= centerEle){
                setPageStart(0);
                setPageEnd(props.PageObj.defaultAmount);
                let temp = [];
                for(let i = 0; i < props.PageObj.defaultAmount ; i++){
                    temp.push(i+1);
                }
                setItems(temp);
            }else{
                setPageStart(totalPage - props.PageObj.defaultAmount);
                setPageEnd(totalPage);
                let temp = [];
                for(let i = totalPage - props.PageObj.defaultAmount; i < totalPage ; i++){
                    temp.push(i+1);
                }
                setItems(temp);
            }
        }




    }
    //点击按钮
    function handlePageLiClick(item){

        setNowPage(item);
        keepClickCenter(item);
    }


    return (
        <div className={"page-button"}>
            <div className={"last-page"} onClick={ handleLastPageClick }>上一页</div>
            <div className={"pages"}>
                <ul>

                    {
                        items.map((item,index)=>{
                            return(
                                // (index >= PageStart && index+1 <= PageEnd)?
                                <li className={(nowPage == item)? "selected" : null }  onClick={ ()=>handlePageLiClick(item)}>{item}</li>
                                // : null
                            )
                        })
                    }

                </ul>
            </div>
            <div className={"next-page"} onClick={ handleNextPageClick }>下一页</div>
        </div>
    )
}
export default PageButton;