import React from 'react';
import NavWrapper from './NavWrapper';
import Logo from './Logo';
import NavLink from './NavLink'
import NavLinkListItem from './NavLinkListItem';
import NavLinkList from './NavLinkList';

const NavBar = (props) => {
    const NavList = [
        {
            name: 'NEW ARRIVALS',
            pos: false
        },
        {
            name: 'SHOP',
            pos: false
        },
        {
            name: 'EVENTS & PROMOTIONS',
            pos: false
        },
        {
            name: ' ',
            pos: true
        },
        {
            name: 'ABOUT US',
            pos: false
        },
        {
            name: 'CONTACT US',
            pos: false
        },
        {
            name: 'F.A.Q.',
            pos: false
        }
    ]
    return (
        <NavWrapper>
            <NavLinkList>
                {
                    NavList.map((NavItem) => (
                         NavItem.pos ? (
                            <NavLinkListItem pos={`'${NavItem.pos}`}>
                                <Logo src='https://i.ibb.co/HdvRb36/mmc-horizontal-logo-burgundy.png' />
                            </NavLinkListItem>
                        ) : (
                            <NavLinkListItem pos={`'${NavItem.pos}`}>
                                <NavLink>{NavItem.name}</NavLink>
                            </NavLinkListItem>
                        )
                    )
                )}
            </NavLinkList>
        </NavWrapper>
    )
}

export default NavBar;
