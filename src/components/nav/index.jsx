import React from 'react';
import NavWrapper from './NavWrapper';
import Logo from './Logo';
import NavLink from './NavLink'
import NavLinkListItem from './NavLinkListItem';
import NavLinkList from './NavLinkList';

// {
//     NavList.map((NavItem) => (
//          NavItem.pos ? (
//             <NavLinkListItem pos={true}>
//                 <Logo src='https://i.ibb.co/HdvRb36/mmc-horizontal-logo-burgundy.png' />
//             </NavLinkListItem>
//         ) : (
//             <NavLinkListItem pos={false}>
//                 <NavLink>{NavItem.name}</NavLink>
//             </NavLinkListItem>
//         )
//     )
// )}

const NavBar = (props) => {
    // const NavList = [
    //     {
    //         name: 'NEW ARRIVALS',
    //         pos: false
    //     },
    //     {
    //         name: 'SHOP',
    //         pos: false
    //     },
    //     {
    //         name: 'EVENTS & PROMOTIONS',
    //         pos: false
    //     },
    //     {
    //         name: ' ',
    //         pos: true
    //     },
    //     {
    //         name: 'ABOUT US',
    //         pos: false
    //     },
    //     {
    //         name: 'CONTACT US',
    //         pos: false
    //     },
    //     {
    //         name: 'F.A.Q.',
    //         pos: false
    //     }
    // ]
    return (
        <NavWrapper>
            <NavLinkList>

                <NavLinkListItem>
                    <NavLink isActive={true}>NEW ARRIVALS</NavLink>
                </NavLinkListItem>

                <NavLinkListItem>
                    <NavLink>SHOP</NavLink>
                </NavLinkListItem>

                <NavLinkListItem>
                    <NavLink>PROMOTIONS</NavLink>
                </NavLinkListItem>

            </NavLinkList>

            <Logo src='https://i.ibb.co/HdvRb36/mmc-horizontal-logo-burgundy.png' />

            <NavLinkList>
                <NavLinkListItem>
                    <NavLink>ABOUT US</NavLink>
                </NavLinkListItem>

                <NavLinkListItem>
                    <NavLink>CONTACT US</NavLink>
                </NavLinkListItem>

                <NavLinkListItem>
                    <NavLink>F A Q</NavLink>
                </NavLinkListItem>
            </NavLinkList>
        </NavWrapper>
    )
}

export default NavBar;
