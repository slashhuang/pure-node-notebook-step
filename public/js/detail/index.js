/*
 * 博客详情页面
 * @Author slashhuang
 * 17/4/25
 */
require('./scss/index.scss')
import { blogDetailApi } from '../manage/ajax/'
import React,{ Component }  from 'react'
import { render } from 'react-dom'
import { Spin } from 'antd'
import querystring from 'querystring'
import { DetailPanel } from '../components/'
class DetailIndex extends Component{
    state={
        detail:null
    }
    componentDidMount(){
        let query = querystring.parse(location.search.substr(1))
        blogDetailApi(query).then(detail=>{
            this.setState({detail})
        })
    }
    render(){
        let {detail} = this.state
        return (
            <div className='container clearfix'>
               {
                do{
                    if(detail){
                        <DetailPanel detail={detail}/>
                    }else{
                        <Spin size='large' tip="加载中..." className='spinner'/>
                    }
                }
               }
                <div className="widgets">
                </div>
            </div>
        )
    }
}
render(<DetailIndex />,document.getElementById('mod-detail'))





