import React from "react";
import Grid from "../Grid/Grid";
import IconButton from "../IconButton/IconButton";

const TodoForm = props => (
  <div role="form" className="todoForm input-group">
    <Grid cols="12 9 10">
      <input
        className="form-control"
        id="description"
        placeholder="Adicione uma tarefa"
        value={props.description}
        onChange={props.handleChange}
      ></input>
    </Grid>

    <Grid cols="12 3 2">
      <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
    </Grid>
  </div>
);

export default TodoForm;
