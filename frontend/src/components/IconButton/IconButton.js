import React from "react";
import If from "../If/If";

// import { Container } from './styles';

const IconButton = props => (
  <If test={!props.hidden}>
    <button className={"btn btn-" + props.style} onClick={props.onClick}>
      <i className={"fa fa-" + props.icon}></i>
    </button>
  </If>
);

export default IconButton;
