import React from "react";
import "./TodoList.scss";

class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = { checked: false }
        this.handlerCheck = this.handlerCheck.bind(this)
        this.handlerRemove = this.handlerRemove.bind(this)
    }

    handlerCheck(e) {
        this.setState((state) => {
            return {
                checked: !state.checked
            }
        })
    }

    handlerRemove(e) {
        this.props.removeItem(this.props.id);
    }

    render() {
        return (
            <div className={'list-item' + (this.state.checked ? ' checked' : '')}>
                <p>
                    {this.props.value}
                </p>
                <div>
                    <button onClick={this.handlerCheck} title="Feito" className="btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fa-fw"><path fill="currentColor" d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z" ></path></svg></button>
                    <button onClick={this.handlerRemove} title="Excluir" className="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fa-fw"><path fill="currentColor" d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z"></path></svg></button>
                </div>
            </div>
        )
    }
}

class ListItems extends React.Component {
    constructor(props) {
        super(props)
        this.handlerRemove = this.handlerRemove.bind(this)
    }

    handlerRemove(e) {
        this.props.removeItem(e);
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">Todo List</div>
                <div className="card-body">
                    {!this.props.allItems.length ? 'No task to perform' : this.props.allItems.map(item => <Item removeItem={this.handlerRemove} id={item.id} key={item.id} value={item.nome} />)}
                </div>
            </div>        
        )
    }

}

class TodoList extends React.Component {

    constructor(props) {
        super(props)
        this.handlerRemove = this.handlerRemove.bind(this)
    }

    handlerRemove(e) {
        this.props.removeItem(e)
    }

    render() {
        return (
            <div className="todo-list">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ListItems removeItem={this.handlerRemove} allItems={this.props.items} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;
