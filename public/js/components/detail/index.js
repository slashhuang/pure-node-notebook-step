/*
 * 日志详情组件
 * @Author slashhuang
 * 17/4/25
 */
require('./index.scss')
import React,{ Component }  from 'react'

export default
 class DetailPanel extends Component{
    renderTitle(){
        let {title,category,_id,date} = this.props.detail
        return  <div className='blog-head clearfix'>
                    <h1 className='blog-title'>
                        <a href={`/blog?id=${_id}`}>
                            {title}
                        </a>
                        {
                            do{
                                if(window.hasUser){
                                    <a href={`/manage?type=edit&blogId=${_id}`}
                                       className="edit">
                                        编辑博客
                                    </a>
                                }else{
                                    null
                                }
                            }
                        }
                    </h1>
                    <h3 className='blog-author'>
                        <span className="date">
                            发表于 {date}
                        </span>
                        <span className="author">
                            by <a href="/about">slashhuang</a>
                        </span>
                    </h3>
                </div>
    }
    renderBlog(){
        let {detail} = this.props
        if(detail.content){
            return <div dangerouslySetInnerHTML={{__html:detail.content}}></div>
        }else{
            return <div>没有内容</div>
        }
    }
    render(){
        let {detail} = this.props;
        if(detail){
            return (
                 <div className="blog-detail markdown">
                         {this.renderTitle()}
                        <div className='blog-content'>
                            {this.renderBlog()}
                        </div>
                        <h4 className='blog-category'>标签:
                            <a href={`/category?name=${detail.category.id}`}>{detail.category.name}</a>
                        </h4>
                </div>
            )
        }else{
            return null
        }

    }
}