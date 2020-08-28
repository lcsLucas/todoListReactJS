import React from 'react';
import "./AddTodo.scss";

function InputAdd(props) {
    return (
        <input onKeyUp={props.keyUpInput} onChange={props.changeInput} value={props.value} placeholder="O que você deseja adicionar?" className="form-control" />
    )
}

function ButtonAdd(props) {
    return <button onClick={props.clickButton} className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fa-fw"><path fill="currentColor" d="M304 144h64v64c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-64h64c8.84 0 16-7.16 16-16V96c0-8.84-7.16-16-16-16h-64V16c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v64h-64c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16zm195.59 220.1l-58.54-26.53-161.19 73.06c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.95 337.57 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40zM12.41 275.9l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L448 299.28V280.7c-15.32 4.38-31.27 7.29-48 7.29-88.01 0-160.72-64.67-173.72-149.04L12.41 235.9c-16.55 7.5-16.55 32.5 0 40z"></path></svg> Add</button>
}

class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerClick = this.handlerClick.bind(this);
        this.handlerKeyUp = this.handlerKeyUp.bind(this);
    }

    handlerChange(e) {
        e.preventDefault();
        this.props.AppChange(e.target.value);
    }

    handlerClick(e) {
        if (this.props.checkValue())
            this.props.addTodo();
    }

    handlerKeyUp(e) {
        if (e.keyCode === 13 && this.props.checkValue())
            this.props.addTodo();
    }

    render() {
        return (
            <div className="todo-add">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-9">
                            <InputAdd keyUpInput={this.handlerKeyUp} changeInput={this.handlerChange} value={this.props.value} />
                        </div>
                        <div className="col-12 col-lg-3">
                            <ButtonAdd clickButton={this.handlerClick} />
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default AddTodo