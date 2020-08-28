import React from 'react';
import './App.scss';

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { value: "", allItems: [] }
    this.handlerAddTodo = this.handlerAddTodo.bind(this)
    this.handlerChange = this.handlerChange.bind(this)
    this.checkValue = this.checkValue.bind(this)
    this.handlerRemove = this.handlerRemove.bind(this)
  }

  handlerAddTodo(e) {
    const tempItems = this.state.allItems
    tempItems.push({
      id: new Date().getTime(),
      nome: this.state.value
    });

    this.setState({
      allItems: tempItems,
      value: ""
    })

  }

  handlerChange(e) {
    this.setState({
      value: e
    })
  }

  handlerRemove(e) {

    this.setState({
      allItems: this.state.allItems.filter((item) => {
        return !(item.id === e)
      })
    })

  }

  checkValue() {
    return !!this.state.value
  }

  render() {
    return (
      <div className="Todo-List">
        <AddTodo checkValue={this.checkValue} AppChange={this.handlerChange} value={this.state.value} addTodo={this.handlerAddTodo} />
        <TodoList removeItem={this.handlerRemove} items={this.state.allItems} />
      </div>
    );
  }
}

export default App;
