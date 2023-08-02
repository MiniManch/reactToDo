import {Component} from 'react';
import {generateRandomID as genId} from '../utils';

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  addNewItem = (e) => {
    e.preventDefault();
    if (this.state.inputValue !== '') {
      let newItem = { id: genId(), content: this.state.inputValue };
      this.props.submitFunc(newItem); // Use the prop directly
      this.resetState();
    }
  }

	onChangeFunc = (e) =>{
		this.setState({inputValue:e.target.value});
	}

	resetState = () => {
		this.setState({inputValue:''});
	}

	render(){
		return(
			 <form onSubmit={this.addNewItem} className=" todos-form container mt-4">
		      <div className="cute-input-container">
		        <div className="input-group cute-input-group">
		          <input
		            type="text"
		            className="form-control cute-input"
		            id="exampleInput"
		            placeholder="Type something todo!"
		            value = {this.state.inputValue}
		            onChange={this.onChangeFunc}
		          />
		          <button type='submit' className="cute-button">Add!</button>
		        </div>
		      </div>
		    </form>
		)
	}
}


