import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';

const Wrapper = styled.div`
    padding: 8rem; 
    @media only screen and (max-width: 768px){
        padding: 2rem;
    }
`;

const Border = styled.div`
    border-image: linear-gradient(45deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82) 1;
    border-width: 1rem;
    border-style: dashed;
    padding: 5rem 8rem 5rem 8rem;
    @media only screen and (max-width: 768px){
        padding: 2rem;
        border-width: 0.5rem;
    }
`;

const Title = styled.div`
    font-size: 4rem; 
    @media only screen and (max-width: 768px){
        font-size: 2.5rem;
    }
`;

const Bar = styled.div`
    align-items: center;
    display: flex;
    padding-bottom: 1.5rem;
`;

const Body = styled.div`
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    @media only screen and (max-width: 768px){
        font-size: 1rem;
    }
`;

const Editor = styled.div`
    margin-top: 1.25rem;
    font-weight: bold;
    font-size: 1.25rem;
    @media only screen and (max-width: 768px){
        font-size: 1rem;
    }
`;

const Position = styled.div`
    font-size: 1.25rem;
    @media only screen and (max-width: 768px){
        font-size: 1rem;
    }
`;

const Container = styled.div`
    background-color: white;
    font-family: Josefin Sans;
    color: rgba(0, 117, 255, 0.8);
    @media only screen and (max-width: 768px){

    }
`;

const p1 = `Dear readers,
`;

const p2 = `Every year in June, LGBTQ people and allies come together to celebrate Pride Month. In addition to these 
celebrations, Americans commemorate LGBTQ History Month in October. The month includes both National Coming Out Day 
and the anniversary of the National March on Washington for Lesbian and Gay Rights, held first in 1979. 
`;

const p3 = `Columbia is a locus of national LBGTQ history. It was the first university in the country to have a gay 
student organization and is today where Professor George Chauncey—the first-ever scholar of LGBTQ history to win the 
Kluge Award—teaches. Lesbian, gay, bisexual, transgender, and queer Columbians have played integral roles in shaping 
our community. In this edition, we have worked to commemorate the lives of queer Columbians and illuminate queer 
experiences at Columbia today.
`;

const p4 = `Within this edition, you can hear from Chauncey himself about the importance of studying LGBTQ history. 
You can read about trans and nonbinary students grappling with what it means to attend a historically women’s college,
and the club they created to provide support and socialize. And you can read heartfelt perspectives on queer 
experiences, from interrogating hookup culture to exploring intersectional identity, in our opinion pages.
`;

const p5 = `We hope you leave this edition with a deeper understanding of the contributions made by queer Columbians
and community members to our school and beyond.  We are excited to continue our coverage of queer experiences at 
Columbia and to celebrate queer history, voices, stories, and lives all year round.
`;

const LetterEditor = ({ }) => {
    return (
        <Wrapper>
            <Border>
                <Container>
                    <Bar><Title> LETTER FROM THE EDITOR </Title></Bar>
                    <Body><b>{p1}</b></Body>
                    <Body>{p2}</Body>
                    <Body>{p3}</Body>
                    <Body>{p4}</Body>
                    <Body>{p5}</Body>
                    <Body>Sincerely,</Body>
                    <Editor>Clara Ence Morse</Editor>
                    <Position>Editor-in-Chief</Position>
                    <Editor>Dia Gill</Editor>
                    <Position>Managing Editor</Position>
                </Container>
            </Border>
        </Wrapper>
    )
};

export default LetterEditor;