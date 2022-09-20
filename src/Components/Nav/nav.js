import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <Link to='/'>
      <h1 className='header'>NYT Reader</h1>
    </Link>
    </>
  )
}

export default Nav;