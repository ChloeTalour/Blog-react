import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './menu';
import './styles.scss';

const Header = ({ categories }) => {
  const categoriesList = categories.map((item) => (
    <MenuItem
      key={item.label}
      label={item.label}
      route={item.route}
    />
  ));
  
  return (
    <header className="header">
      <nav className="header__list">
        { categoriesList }
      </nav>
    </header>
  );
};

Header.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Header;
