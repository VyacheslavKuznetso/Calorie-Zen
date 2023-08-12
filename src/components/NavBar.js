import React from 'react';
import './NavBar.css';
import { NavLink, useNavigate } from 'react-router-dom'

function NavBar(props) {

  const history = useNavigate();

  let {setLoggedIn} = props

  function signOut() {
    localStorage.removeItem('jwt');
    history('/login', {replace: true})
    setLoggedIn(false)
  }


  return (
    <nav className="menu">
      <NavLink to="/diary" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`}>Домой</NavLink>
      <NavLink to="/tips" className={({isActive}) => `menu__item ${isActive ? "menu__item_active" : ""}`}>Советы</NavLink>
      <button className='munu__button munu__button_exit' onClick={signOut} >Выход</button>
    </nav>
  );
}

export default NavBar;
