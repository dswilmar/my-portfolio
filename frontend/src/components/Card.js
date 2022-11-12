import React from "react";
import styled from "styled-components";

const Card = ({project}) => {    

    return(
        <>            
            <StyledCard key={project._id}>
                <Content>
                    <Image src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    <Info>
                        <h3>{project.title}</h3>
                        <h4>{project.createdAt}</h4>
                        <p>{project.description}</p>
                    </Info>
                </Content>
            </StyledCard>
        </>
    )
}

const StyledCard = styled.div`
    min-height: 30vh;
    border: 1px solid;
    border-radius: 0.5rem;
    border-color: #416CD5;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 65vh;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    padding-left: 1rem;
    h3 {
        padding-top: 2rem;
    }
`;

export default Card;