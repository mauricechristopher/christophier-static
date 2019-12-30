import styled from 'styled-components';

export const StyledStaticSection = styled.section`
    /* Needed for children to be absolutely positioned relative to the parent. */
    position: relative;
    /* The height of the container.
    Must be set, but it doesn't really matter what the value is. */
    height: 50vh;

    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFF8F0;
    text-shadow: 0 0 5px #000;
    box-shadow: 0 5px 20px black, 0 -5px 20px black;
`

export const StyledParallaxSection = styled.section`
    position: relative;
    height: 100vh;
    margin: 0;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-shadow: 0 0 5px #000;


    &:after {

        /* Display and position the pseudo-element */
         content: " ";
         position: absolute;
         top: 0;
         right: 0;
         bottom: 0;
         left: 0;

         /* Force the background image to fill the whole element. */
         background-size: cover
         background-position: center;

         /* ------------------- SEE DADS OPINION ------------------------ */
         transform: translateZ(-1px) scale(1.5);
         /* background-attachment: fixed; */

         /* Keep the image from overlapping sibling elements. */
         z-index: -1;
         background-image: ${props => `url('${props.pic}')`};
    }
`
