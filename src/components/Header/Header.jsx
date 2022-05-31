import React from 'react';
import s from './Header.module.css';

//Header component
const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.header__inner}>
        <a className="logo" href="#">
          <img
            className={s.logo__img}
            src="https://cdn-icons-png.flaticon.com/512/1828/1828644.png"
            alt="error"
          />
        </a>
        <input className={s.header__search} type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Header;
