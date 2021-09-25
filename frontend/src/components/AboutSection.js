import React from 'react';
import { About, Description, Image } from '../styles';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <h2>Wilmar dos Santos</h2>
                <h2>Desenvolvedor Web</h2>            
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.</p>
                <button>Contact Me</button>
            </Description>
            <Image>
            <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&h=425&w=640" alt="" />
            </Image>
        </About>
    )
}

export default AboutSection;