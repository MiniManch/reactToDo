import {Component} from 'react';

export default class TodoItem extends Component{
	render(){
		let item = this.props.item;
		let deleteFunc = this.props.deleteFunc;

		return(
			<>
			<div className='todo-item-container'>
			  <p className="todo-text">{item.content}</p>
			  <button onClick={() => deleteFunc(item.id)} className="cute-delete-button">Delete</button>
			</div>
			<br/>
			</>
		)
	}
}