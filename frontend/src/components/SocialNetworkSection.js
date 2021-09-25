import React from 'react';
import styled from 'styled-components';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialNetworkSection = () => {
    return (
        <Network>
            <Social href="https://github.com/dswilmar" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="3x" />
                <h3>Github</h3>
            </Social>
            <Social href="https://www.linkedin.com/in/wilmards/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
                <h3>Linkedin</h3>
            </Social>
            <Social href="https://api.whatsapp.com/send?phone=5549998272376" target="_blank">
                <FontAwesomeIcon icon={faWhatsapp} size="3x" />
                <h3>Whatsapp</h3>
            </Social>
        </Network>
    )
}

const Network = styled.div`
    padding: 2rem 5rem;
`;

const Social = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px 20px;
    padding-left: 2rem;
    text-decoration: none;
    color: #fafafa;
    &:hover {
        background: #353535;
        cursor: pointer;        
    }
    h3 {
        color: grey;
        margin: 2rem;
    }
`;

export default SocialNetworkSection;