/* eslint-disable react/style-prop-object */
import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../Grid/Grid';
import IconButton from '../IconButton/IconButton';

const TodoForm = ({
  description, handleChange, handleAdd, handleSearch, handleClear,
}) => {
  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      e.shiftKey ? handleSearch() : handleAdd();
    } else if (e.key === 'Escape') {
      handleClear();
    }
  };

  return (
    <div role="form" className="todoForm input-group my-4">
      <Grid cols="12 9 10">
        <input
          className="form-control "
          id="description"
          onKeyUp={keyHandler}
          placeholder="Adicione uma tarefa"
          value={description}
          onChange={handleChange}
        />
      </Grid>

      <Grid cols="12 3 2">
        <IconButton style="primary ml-2" icon="plus" onClick={handleAdd} />
        <IconButton style="info" icon="search" onClick={handleSearch} />
        <IconButton style="secondary" icon="close" onClick={() => handleClear()} />
      </Grid>
    </div>
  );
};

TodoForm.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};

export default TodoForm;
