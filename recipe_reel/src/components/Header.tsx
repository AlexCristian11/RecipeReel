import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiCookingGlove } from 'react-icons/gi';

const Header = () => {
  return (
    <HeaderStyle>
      <div id="icon-name">
        <GiCookingGlove id="icon" />
        <i>Recipe Reel</i>
      </div>
      <ul>
        <li>
          <Link to="/recipes" id="recipes">
            Recipes
          </Link>
        </li>
        <li>
          <Link to="/recipes" id="recipes">
            Test
          </Link>
        </li>
        <li>
          <Link to="/recipes" id="recipes">
            Test
          </Link>
        </li>
      </ul>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 20;

  i {
    color: #fff;
    background: transparent;
    font-size: 1.5rem;
    margin-left: 5px;
  }

  #icon-name {
    display: flex;
    background: transparent;
  }

  ul {
    display: flex;
    background: transparent;
    flex-direction: row;
    width: auto;
    justify-content: flex-end;
  }

  li {
    list-style: none;
    background: transparent;
    margin-right: 100px;
  }

  #recipes {
    font-size: 1.75em;
    color: #fff;
    background: transparent;
    list-style: none;
    text-decoration: none;
    font-family: 'Bebas Neue', sans-serif;
  }

  #icon {
    color: #fff;
    font-size: 2rem;
    background: transparent;
    margin-left: 20px;
  }
`;

export default Header;
