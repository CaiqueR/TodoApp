/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';

import PageHeader from '../PageHeader/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import api from '../../services/api';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      list: [],
    };

    this.refresh();
  }

  refresh = (description = '') => {
    const search = description ? `&description__regex=/${description}/` : '';
    api.get(`/todos?sort=-createdAt${search}`).then((result) => {
      this.setState({ ...this.state, description, list: result.data });
    });
  };

  handleSearch = () => {
    const { description } = this.state;
    this.refresh(description);
  }

  handleAdd = () => {
    const { description } = this.state;
    api.post('/todos', { description }).then(() => {
      this.refresh();
    });
  };

  handleRemove = (todo) => {
    const { description } = this.state;
    api.delete(`/todos/${todo._id}`).then(() => this.refresh(description));
  }

  handleMarkAsDone = (todo) => {
    const { description } = this.state;
    api.put(`/todos/${todo._id}`, { ...todo, done: true }).then(() => this.refresh(description));
  }

  handleMarkAsPending = (todo) => {
    const { description } = this.state;
    api.put(`/todos/${todo._id}`, { ...todo, done: false }).then(() => this.refresh(description));
  }

  handleChange = (e) => {
    this.setState({ ...this.state, description: e.target.value });
  };


  render() {
    const { description, list } = this.state;
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm
          description={description}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleClear={this.refresh}
        />
        <TodoList
          proplist={list}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
          handleRemove={this.handleRemove}
        />
      </div>
    );
  }
}
