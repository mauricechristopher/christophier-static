import styled from 'styled-components';

const NavLink = styled.a`
    position: relative;
    color: #7A0039;
    font-family: 'Raleway', sans-serif;
    letter-spacing: 1px;
    font-weight: 700;
    font-size: 18px;
    cursor: pointer;
    flex-wrap: wrap;
    width: 100px;


    /* ANIMATED */
    padding: 0.3em 0;
    position: relative;
    text-decoration: none;

    &:before, &:after {
        height: 3px;
        position: absolute;
        content: '';
        -webkit-transition: all 0.35s ease;
        transition: all 0.35s ease;
        background-color: #C8D6AF;
        width: ${props => props.isActive ? '100%' : '0'};
    }

    &:hover:before, &:hover:after {
        width: 100%;
    }

    &:before {
        top: 0;
        left: 0;
    }
    &:after {
        bottom: 0;
        right: 0;
    }
`

export default NavLink;
