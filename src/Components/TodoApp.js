import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodosContainer from './TodosContainer';
import removeItemFromArray from '../utils';

export default class TodoApp extends Component {
  constructor() {
    super();
    let todosList = this.fetchTodos();

    if (todosList === null) {
      localStorage.setItem('data', '[]'); 
      todosList = [];
    } else {
      todosList = JSON.parse(todosList);
    }

    this.state = {
      items: todosList,
    };
  }

  fetchTodos = () => {
    return localStorage.getItem('data');
  }

  addItem = (item) => {
    const existingData = JSON.parse(this.fetchTodos());
    existingData.push(item);
    localStorage.setItem('data', JSON.stringify(existingData));
    this.setState({ items: existingData });
  }

  removeItem = (item) => {
    const existingData = JSON.parse(this.fetchTodos());
    const foundObject = existingData.find((i) => i.id === item.id);
    const updatedData = removeItemFromArray(existingData, foundObject);
    localStorage.setItem('data', JSON.stringify(updatedData));
    this.setState({ items: updatedData });
  }

  render() {
    let items = this.state.items;
    return (
      <div id='childDiv'>
        <TodoForm submitFunc={this.addItem} />
        <TodosContainer deleteFunc={this.removeItem} items={this.state.items} />
      </div>
    );
  }
}
