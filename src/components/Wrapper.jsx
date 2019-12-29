import styled from 'styled-components';

const Wrapper = styled.div`
    /* The height needs to be set to a fixed value for the effect to work.
    * 100vh is the full height of the viewport. */
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 0;
    padding: 0;
    /* This is essentailly the simulated distance from the viewport
    to transformed objects.*/
    perspective: 2px;
`

export default Wrapper;
