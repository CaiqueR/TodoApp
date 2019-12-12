/* eslint-disable react/style-prop-object */
import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton/IconButton';
import './Todo.css';

const TodoList = ({
  proplist, handleRemove, handleMarkAsDone, handleMarkAsPending,
}) => {
  const renderRows = () => {
    const list = proplist || [];

    return list.map((todo) => (
      // eslint-disable-next-line no-underscore-dangle
      <tr key={todo._id}>
        <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
        <td>
          <IconButton style="success" icon="check" hidden={todo.done} onClick={() => handleMarkAsDone(todo)} />
          <IconButton style="warning" icon="undo" hidden={!todo.done} onClick={() => handleMarkAsPending(todo)} />
          <IconButton style="danger" icon="trash-o" onClick={() => handleRemove(todo)} />
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="todoActions">Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

TodoList.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  handleMarkAsDone: PropTypes.func.isRequired,
  handleMarkAsPending: PropTypes.func.isRequired,
  proplist: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
