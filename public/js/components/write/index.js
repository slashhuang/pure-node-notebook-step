/*
 * @Author slashhuang
 * 17/4/18
 * 写博客界面
 * 因为这块代码只能登陆才可见，所以暂时可以不考虑首屏性能问题
 */

import React ,{ Component } from 'react';
import { render } from 'react-dom';
import { submitBlogApi  } from './ajax'

import { Row, Col,Menu, Input,Select, Button, Icon,message } from 'antd';

const Option = Select.Option;

//markdown 功能
import marked from 'marked';
import highlight from 'highlight.js'
marked.setOptions({
  highlight: function (code) {
    return highlight.highlightAuto(code).value;
  }
});
import Dialog from '../dialog'
export default
class BlogWritePanel extends Component{
    constructor(){
        super();
        this.state= this.initState()
        this.storeData = this.storeData.bind(this);
        this.submitData = this.submitData.bind(this);
        this.newBlog = this.newBlog.bind(this)
    }
    initState(){
        return {
            categoryList:[],
            content:"",
            previewContent:'',
            title:'',
            category:{}
        }
    }
    componentWillReceiveProps(props){
        this.setState({...props})
    }
    submitData(){
        let {
            title,
            category,
            previewContent,
            content
        } = this.state;
        this.setState({},()=>submitBlogApi({
                title,
                category,
                content:previewContent,
                rawContent:content,
                id:this.props.blogId||''
            })
            .then(res=>{
                this.setState({loading:false})
                if(res.error){
                    message.error(res.msg);
                }else{
                    this.dialogRef.handleState(true,res['_id'])
                }
            }))
    }
    storeData(obj,callback){
        this.setState(obj,callback)
    }
    newBlog(){
       location.href='/manage?type=edit'
    }
    parserHtml(){
        let {content} = this.state;
        if(content){
            marked(content,(err,previewContent)=>{
                this.setState({previewContent})
            })
        }
    }
    render(){
        let {
            categoryList,
            content,
            title,
            category,
            previewContent
        } = this.state;
        return (
             <div className="content">
                    <Row>
                        <Col span={10}>
                            <Row type="flex" align="middle">
                                <Col span={6}>
                                    文章标题
                                </Col>
                                <Col span={12}>
                                    <Input placeholder="请输入文章标题"
                                           value={title}
                                           onChange={e=>this.storeData({'title':e.target.value})}/>
                                </Col>
                            </Row>
                        </Col>
                      <Col span={10}>
                             <Row type="flex" align="middle">
                                <Col span={8}>
                                    选择文章分类
                                </Col>
                                <Col span={12}>
                                    <Select
                                        disabled={this.props.blogId=='about'}
                                        defaultValue={category.name}
                                        value={category.name}
                                        showSearch
                                        style={{ width: 200 }}
                                        placeholder="请选择文章分类"
                                        optionFilterProp="children"
                                        onSelect={(val,option)=>{
                                            let { category } = option.props
                                            this.storeData({category})
                                        }}>
                                      {
                                        categoryList&&categoryList.map(category=>{
                                            let { name,_id } = category
                                            return  <Option value={name} category={category} key={name}>{name}</Option>
                                        })
                                      }
                                    </Select>
                                </Col>
                            </Row>
                      </Col>
                    </Row>
                    <Row className="markdown">
                        <Col span={12}>
                            <Input type="textarea"
                                   className="mark-content"
                                   value={content}
                                   onChange={e=>{
                                        this.storeData({content:e.target.value},this.parserHtml)
                                    }}/>
                        </Col>
                        <Col span={12}>
                            <div className="mark-content-preview"
                                dangerouslySetInnerHTML={{__html:previewContent}}>
                            </div>
                        </Col>
                    </Row>
                     <Row className="submit-btn"
                          type="flex" justify="center">
                            <Button type="primary"
                                size='large'
                                loading={this.state.loading}
                                onClick={this.submitData}>
                              提交博客
                            </Button>

                            <Button type="primary"
                                style={{marginLeft:'20px'}}
                                size='large'
                                loading={this.state.loading}
                                onClick={this.newBlog}>
                              新建博客
                            </Button>
                    </Row>
                    <div>
                        <Dialog ref={(dialogRef=>this.dialogRef=dialogRef)}/>
                    </div>
                 </div>
        )
    }
}
