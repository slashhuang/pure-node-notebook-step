/*
 * @Author slashhuang
 * 17/4/18
 * 写博客界面
 * 因为这块代码只能登陆才可见，所以暂时可以不考虑首屏性能问题
 */
import './scss/index.scss'
import React,{ Component }  from 'react'
import { render } from 'react-dom'
import LeftMenu from './components/menu'
import CategoryPanel from './components/category'
import WritePanel from './components/write'
import ManagePanel from './components/manage'
import { query } from './util'
class ToolPanel extends Component{
	state={
		activeTab:query.type||'category'
	}
	changePanel(key){
		this.setState({
			activeTab:key
		})
	}
	render(){
		let { activeTab } = this.state
		return (
			<div className='container'>
				<div className='menu-left'>
					<LeftMenu onClick={::this.changePanel} activeTab={activeTab}/>
				</div>
				{
					do{
						if(activeTab=='category'){
							<CategoryPanel key='category'/>
						}else if(activeTab=='edit'){
							<WritePanel key="edit" blogId={query.blogId}/>
						}else{
							<ManagePanel key="manage"/>
						}
					}
				}
			</div>
		)
	}
}
render(<ToolPanel />,document.getElementById('mod-manage'))
