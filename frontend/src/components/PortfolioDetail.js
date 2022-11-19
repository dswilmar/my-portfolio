import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from "react-router-dom";
import { useApi } from '../hooks/useApi';

const PortfolioDetail = () => {

    const { slug } = useParams();
    const { data } = useApi(`/portfolio/${slug}`);

    return (
        <Detail>
            <Stats>
                <div>
                    <Title>{data?.data?.title}</Title>
                    <DescriptionShort>
                        <p>{data?.data?.description}</p>
                    </DescriptionShort>
                </div>
                <Info>
                    <h3>Tecnologias</h3>
                    <Technolgies>                    
                        <Technology>
                            <FontAwesomeIcon icon={["fab", "react"]} size="4x" /> ReactJS                       
                        </Technology>
                        <Technology>                    
                            <FontAwesomeIcon icon={["fas", "database"]} size="4x" /> MongoDB
                        </Technology>
                        <Technology>
                            <FontAwesomeIcon icon={["fab", "node-js"]} size="4x" /> Node
                        </Technology>
                    </Technolgies>
                </Info>
            </Stats>
            <Description>
                <p>{data?.data?.longDescription}</p>
            </Description>
            <div>
                <img src={data?.data?.image} />
            </div>
        </Detail>
    )
}

const Detail = styled.div`
    width: 80%;
    min-height: 80vh;
    background: #FFF;
    position: absolute;
    left: 10%;
    top: 15%;
    margin-bottom: 10%;
    z-index: 10;
    border-radius: 3px;
    img {
        width: 100%;
        object-fit: cover;
        height: 50vh;
    }
`;

const Stats = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 5rem;
`;

const Description = styled.div`
    padding: 2rem 5rem;
    p {
        color: #000;
    }
`;

const DescriptionShort = styled(Description)`
    padding: 0;
`;

const Info = styled.div`
    text-align: center;
    min-width: 300px;
    h3 {
        color: #696969;
    }
`;

const Title = styled.h2`
    color: #696969;
`;

const Technolgies = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 1rem;
    svg {
        color: #416CD5;
    }
`;

const Technology = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #416CD5;
`;

export default PortfolioDetail;