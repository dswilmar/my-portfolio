import React from 'react';
import styled from 'styled-components';

//Naviagtion
import { Link } from 'react-router-dom';

const Nav = () => {

    const navItems = {
        about: '<About Me />',
        portfolio: '<Portfolio />',
        contact: '<Contact Me />'
    }

    return (
        <StyledNav>
            <h1>
                <Link to="/">Wilmar dos Santos</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">{navItems.about}</Link>
                </li>
                <li>
                    <Link to="/portfolio">{navItems.portfolio}</Link>
                </li>
                <li>
                    <Link to="/contact">{navItems.contact}</Link>
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    z-index: 3;
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;    
    position: sticky;
    opacity: 0.85;
    top: 0;
    ul {
        display: flex;
        list-style: none;        
    }
    li {
        padding-left: 5rem;
    }
    a {
        color: white;
        text-decoration: none;
    }
`;

export default Nav;