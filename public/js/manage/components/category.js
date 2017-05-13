/*
 * 文章分类
 * @Author slashhuang
 * 17/4/24
 */
 import React,{Component} from 'react'
 import {Row,Col} from 'antd'
 import { Card,Input,Button,Table } from 'antd';
 import { categoryApi,categoryListApi } from '../ajax/'
 export default
 class Category extends Component{
    state={
      categoryList:[],
      newCategory:{}
    }
    submit(){
      let { newCategory,categoryList } = this.state
      categoryApi(newCategory).then(val=>{
        this.setState({
          categoryList:categoryList.concat([newCategory])
        })
      })
    }
    componentDidMount(){
       categoryListApi().then(categoryList=>{
            this.setState({categoryList})
        })
    }
    genColumn(){
      return [{
        title: '分类名称',
        dataIndex: 'name',
        key: 'name',
        render: name => <span key={name}>{ name }</span>
      }, {
        title: '分类ID',
        dataIndex: 'id',
        key: 'id',
        render:id=> <span  key={id}>{id }</span>
      }]
    }
    render(){
        let { categoryList,newCategory } =this.state
        return (
            <div className='content'>
              <Row>
                <Col span={12}>
                  <Card title="已有分类"
                        extra={<a href="#">More</a>}
                        style={{ width: '80%' }}>
                        {
                          do{
                            if(categoryList&&categoryList.length>0){
                                <Table columns={this.genColumn()}
                                      rowKey={record => record.id}
                                      dataSource={categoryList} />
                              }else{
                                null
                              }
                          }
                        }
                  </Card>
                </Col>
                <Col span={12}>
                 <Card title="添加分类"
                       extra={<a href="#">More</a>}
                       style={{ width: '80%' }}>
                       <Input type='text' value={newCategory.name ||''}
                              onChange={e=>this.setState({
                                  newCategory:{
                                    name:e.target.value,
                                    id:e.target.value
                                  }
                                })}/>
                       <Button onClick={::this.submit}>提交分类</Button>
                  </Card>
                </Col>
              </Row>
            </div>
        )
    }
 }

