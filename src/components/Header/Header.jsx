import React from 'react';
import h from './Header.module.css';

const Header = (props) => {
  return (
    <div className={h.header}>
      <div className={h.header__inner}>
        <a className="logo" href="#">
          <img
            className={h.logo__img}
            src="https://cdn-icons-png.flaticon.com/512/1828/1828644.png"
            alt="error"
          />
        </a>
        <input className={h.header__search} type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Header;
