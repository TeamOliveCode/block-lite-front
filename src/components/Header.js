/* eslint-disable */
import React, { useEffect, useState } from 'react';
import './Header.css';
import { Generation_logo } from '../images/_index';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useParams } from 'react-router-dom';

const Header = () => {
  const [toggleOn, setToggleOn] = useState(false);
  const { params } = useParams();

  const toggleBtn = () => {
    if (toggleOn) {
      setToggleOn(false);
    } else {
      setToggleOn(true);
    }
  };

  const toggleBtnOff = () => {
    setToggleOn(false);
  };

  useEffect(() => {
    setToggleOn(false);
    //console.log(params)
    //console.log(toggleOn)
  }, [params]);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img
            style={{ height: 48 }}
            alt="Generation"
            src={Generation_logo}
            onClick={() => toggleBtnOff()}
          ></img>
        </Link>
      </div>
      <ul className="navBar">
        <li>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1>Home</h1>
          </Link>
        </li>
        <li>
          <Link to="/blocks" style={{ textDecoration: 'none' }}>
            <h1>Blocks</h1>
          </Link>
        </li>
        <li>
          <Link to="/txs" style={{ textDecoration: 'none' }}>
            <h1>Txs</h1>
          </Link>
        </li>
        <li>
          <Link to="/charts" style={{ textDecoration: 'none' }}>
            <h1>Charts</h1>
          </Link>
        </li>
      </ul>

      {/* toggle button menu */}
      {toggleOn ? (
        <ul className="navBar_On">
          <li onClick={() => toggleBtnOff()}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <h1>Home</h1>
            </Link>
          </li>
          <li onClick={() => toggleBtnOff()}>
            <Link to="/blocks" style={{ textDecoration: 'none' }}>
              <h1>Blocks</h1>
            </Link>
          </li>
          <li onClick={() => toggleBtnOff()}>
            <Link to="/txs" style={{ textDecoration: 'none' }}>
              <h1>Txs</h1>
            </Link>
          </li>
          <li onClick={() => toggleBtnOff()}>
            <Link to="/charts" style={{ textDecoration: 'none' }}>
              <h1>Charts</h1>
            </Link>
          </li>
        </ul>
      ) : null}
      <div className="navBar_toggle" onClick={() => toggleBtn()}>
        <GiHamburgerMenu size={30} />
      </div>
    </header>
  );
};

export default Header;
