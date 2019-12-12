import React from 'react';
import PropTypes from 'prop-types';
import If from '../If/If';

// import { Container } from './styles';

const IconButton = ({
  style, icon, hidden, onClick,
}) => (
  <If test={!hidden}>
    <button type="button" className={`btn btn-${style}`} onClick={onClick}>
      <i className={`fa fa-${icon}`} />
    </button>
  </If>
);

IconButton.propTypes = {
  hidden: PropTypes.bool,
  style: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  onClick: () => null,
  hidden: false,
};

export default IconButton;
