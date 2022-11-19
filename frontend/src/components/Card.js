import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import moment from "moment";

const Card = ({project}) => {    

    return(
        <>            
            <StyledCard key={project._id}>
                <Link to={`/portfolio/${project.slug}`}>
                    <Content>
                        <Image src={project.image} alt="" />
                        <Info>
                            <h3>{project.title}</h3>
                            <h4>{moment(project.createdAt).format('MMM YYYY')}</h4>
                            <p>{project.description}</p>
                        </Info>
                    </Content>
                </Link>
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
    a {
        text-decoration: none;
    }
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
    height: 65%;
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