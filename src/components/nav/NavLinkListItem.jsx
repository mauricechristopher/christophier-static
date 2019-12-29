import styled from 'styled-components';

const NavLinkListItem = styled.li`
    margin-left: ${props => props.pos ? 'auto' : 'none'};
    margin-right: ${props => props.pos ? 'auto' : 'none'};
`

export default NavLinkListItem;
