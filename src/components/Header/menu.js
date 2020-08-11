import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ label, route }) => <NavLink className="header__list--item" activeClassName="header__link--active" exact to={route}>{label}</NavLink>;

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default MenuItem;
