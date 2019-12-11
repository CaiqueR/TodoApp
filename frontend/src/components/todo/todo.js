import React, { Component } from "react";
import PageHeader from "../PageHeader/PageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      list: []
    };
  }
  handleAdd = () => {
    console.log(this);
  };

  handleChange = e => {
    let teste = 1;
    let arr = { ...this.state, teste: teste + 1 };
    console.log(arr);
    this.setState({ ...this.state, description: e.target.value });
  };
  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
        />
        <TodoList />
      </div>
    );
  }
}
