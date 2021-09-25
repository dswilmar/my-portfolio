import styled from 'styled-components';

export const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: #FFF;
`;

export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    z-index: 2;
    h2 {
        font-size: 3em;
        font-weight: lighter;
        color: yellow;
    }
`;

export const Image = styled.div`
    z-index: 2;
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 75%;
        object-fit: cover;
    }
`