import React from 'react';
import styled from 'styled-components';

const Border = styled.div`    
    margin-left: 3rem;
    padding-bottom: 3rem;
    color: white;
    font-family: Josefin Sans;
    a {
        text-decoration: none;
        color: white;
    }
    @media only screen and (max-width: 768px){
        margin: 0 2rem;
        padding-bottom: 2rem;
    }
`;

const Title = styled.div`
    font-weight: 700;
    font-size: 1.5rem;
    @media only screen and (max-width: 768px){
        font-size: 1.25rem;
    }
`;
const Author = styled.div`
    font-weight: 400;
    font-size: 1rem;
`;

const Image = styled.div`
    display: flex;
    img {
        filter: grayscale(100%); 
        align-items: 'center';
        justifyContent: 'center';
        width: 100%;
        transition-duration: 0.5s;
    }
    img:hover {
        filter: grayscale(0%);
    }
`;

const Article = ({ link, title, author, image }) => {
    return (
        <Border>
            <a href={link}>
                <Image><img src={image}></img></Image>
                <p><Title>{title}</Title></p>
                <p><Author>{author}</Author></p>
            </a>
        </Border>
    )
};

export default Article;