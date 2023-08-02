import {Component} from 'react';
import TodoItem from './TodoItem';


export default class TodosContainer extends Component{

	render(){
		let items = this.props.items;
		let deleteFunc = this.props.deleteFunc;

		return(
			<div className='todos-container'>
				{items.map((item)=>(
					<TodoItem key={item.id} item={item} deleteFunc={()=> deleteFunc(item)}/>
				))}
			</div>
		)
	}
}
