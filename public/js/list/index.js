/*
 * 博客列表页面
 * @Author slashhuang
 * 17/4/25
 */
require('./scss/index.scss')

import { blogListApi } from '../manage/ajax/'
import React,{ Component }  from 'react'
import { render } from 'react-dom'
import { Spin } from 'antd'
import { DetailPanel } from '../components/'

class ListPanel extends Component{
    state={
        blogList:[]
    }
    componentDidMount(){
        blogListApi().then(blogList=>{
            this.setState({blogList})
        })
    }
    renderBlog(detail){
        return <DetailPanel detail={detail}/>
    }
    renderList(){
        let { blogList } =this.state;
        return blogList.map(blog=>{
            return this.renderBlog(blog)
        })
    }
    render(){
        let { blogList } =this.state;
        return (
            <div className='container clearfix'>
                {
                    do{
                        if(blogList.length>0){
                             this.renderList()
                         }else{
                            <Spin size='large' tip="加载中..." className='spinner'/>
                         }
                    }
                }
            </div>
        )
    }
}
render(<ListPanel />,document.getElementById('mod-list'))





