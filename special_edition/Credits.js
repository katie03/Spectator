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
    font-size: 2rem; 
    margin-bottom: 2rem;
    @media only screen and (max-width: 768px){
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 768px){
        flex-direction: column;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;
    font-size: 1.25rem;
    @media only screen and (max-width: 768px){
        width: 100%;
    }
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 1rem 0.5rem 0;
`;

const SectionName = styled.div`
    display: flex;
    font-weight: bold;
    margin-bottom: 1rem;
    @media only screen and (max-width: 768px){
        font-size: 1.125rem;
    }
`;

const Name = styled.div`
    display: flex;
    margin-bottom: 0.5rem;
    @media only screen and (max-width: 768px){
        font-size: 1rem;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    font-family: Josefin Sans;
    color: rgba(0, 117, 255, 0.8);
    @media only screen and (max-width: 768px){
    }
`;

const LetterEditor = ({ }) => {
    return (
        <Wrapper>
            <Border>
                <Container>
                    <Title> THE COLUMBIA DAILY SPECTATOR STAFF WHO MADE THIS ISSUE POSSIBLE </Title>
                    <Row>
                        <Column>
                            <Section>
                                <SectionName>Corporate Board</SectionName>
                                <Name>Clara Ence Morse, Editor-in-Chief</Name>
                                <Name>Dia Gill, Managing Editor</Name>
                                <Name>Vilanna Wang, Publisher</Name>
                            </Section>

                            <Section>
                                <SectionName>Audio</SectionName>
                                <Name>Natalie Goldberg, Director of Podcasting and Audio</Name>
                                <Name>Avery Reed, Deputy Reporter</Name>
                                <Name>Matthew Schwitzer, Deputy Producer</Name>
                                <Name>Eva Scholz-Carlson, Deputy Composer</Name>
                            </Section>
                            <Section>
                                <SectionName>Graphics</SectionName>
                                <Name>Andrew Park, Graphics Editor</Name>
                                <Name>Adina Cazacu-De Luca, Deputy Graphics Editor</Name>
                                <Name>Devon Campbell, Deputy Graphics Editor</Name>
                                <Name>Mehr Kaur, Deputy Graphics Editor</Name>
                                <Name>Laya Gollamudi, Deputy Graphics Editor</Name>
                            </Section>
                            <Section>
                                <SectionName>Arts and Entertainment</SectionName>
                                <Name>Bella Druckman, Arts & Entertainment Editor</Name>
                                <Name>Fernanda Aguero, Deputy A&E Editor</Name>
                                <Name>Katie Levine, Deputy A&E Editor</Name>
                                <Name>Irene Madrigal, Deputy A&E Editor</Name>
                                <Name>Vincent Hou, Deputy A&E Editor</Name>
                            </Section>
                            <Section>
                                <SectionName>Photo</SectionName>
                                <Name>Millie Felder, Photo Editor</Name>
                                <Name>Kate Della Pietra , Deputy Photo Editor</Name>
                                <Name>Samantha Camacho, Deputy Photo Editor</Name>
                                <Name>Kat St. Martin, Deputy Photo Editor</Name>
                                <Name>Annie Son, Deputy Photo Editor</Name>
                                <Name>Sydney Lee, Deputy Photo Editor</Name>
                                <Name>Judy Goldstein, Staff Photographer</Name>
                                <Name>Ryan Newberger, Staff Photographer</Name>
                                <Name>Violet Mendelsund, Staff Photographer</Name>
                                <Name>Selina Yang, Staff Photographer</Name>
                                <Name>Kathy Fang, Staff Photographer</Name>
                            </Section>
                            <Section>
                                <SectionName>Sports</SectionName>
                                <Name>Miles Schachner, Sports Editor</Name>
                                <Name>Rebecca Wachen , Deputy Sports Editor </Name>
                                <Name>Robert Gao, Deputy Sports Editor </Name>
                                <Name>Jorge Hernandez, Deputy Sports Editor </Name>
                                <Name>Takashi Williams , Staff Writer </Name>
                                <Name>Julian Silva-Forbes, Staff Writer </Name>
                                <Name>Sydney Stoller, Staff Writer </Name>
                            </Section>


                        </Column>
                        <Column>
                            <Section>
                                <SectionName>Engineering</SectionName>
                                <Name>Laura Castro Venegas, Head of Engineering</Name>
                                <Name>Yu-Chen Huang, Engineering Manager</Name>
                                <Name>Katie Chen, Associate Developer</Name>
                                <Name>Hannah Huang, Associate Developer</Name>
                            </Section>
                            <Section>
                                <SectionName>Product</SectionName>
                                <Name>Philippe Wu, Head of Product</Name>
                                <Name>Aaron McKeever, Senior Product Designer</Name>
                                <Name>Jennifer Chen, Product Designer</Name>
                            </Section>
                            <Section>
                                <SectionName>University News</SectionName>
                                <Name>Irie Sentner, University News Editor</Name>
                                <Name>Zachary Schermele, Deputy News Editor</Name>
                                <Name>Stella Pagkas, Deputy News Editor</Name>
                                <Name>Isabella Ramírez, Deputy News Editor</Name>
                                <Name>Esha Karam, Deputy News Editor</Name>
                                <Name>Karen Zhang, Staff writer</Name>
                                <Name>Amanda R. Chapa, Staff writer</Name>
                                <Name>Shea Vance , Staff writer</Name>
                                <Name>Sarah Huddleston, Staff writer</Name>
                                <Name>Lina Huang, Staff writer</Name>
                                <Name>Inica Kotasthane, Summer fellow</Name>
                            </Section>
                            <Section>
                                <SectionName>Opinion</SectionName>
                                <Name>Senem Yurdakul, Editorial Page Editor</Name>
                                <Name>Milène Klein, Deputy Editorial Page Editor</Name>
                                <Name>Sydney Goldson, Deputy Editorial Page Editor</Name>
                                <Name>Colin Roedl, Senior Associate Editorial Page Editor</Name>
                            </Section>
                            <Section>
                                <SectionName>Spectrum</SectionName>
                                <Name>Ariana Novo, Spectrum Editor</Name>
                                <Name>Emma Cho, Deputy Spectrum Editor</Name>
                                <Name>Haley Long, Deputy Spectrum Editor</Name>
                                <Name>Aliza Rabinovitz, Deputy Spectrum Editor</Name>
                                <Name>Swethaa Suresh, Deputy Spectrum Editor</Name>
                                <Name>Kylie Gall, Staff Writer</Name>
                                <Name>Caroline Somers, Staff Writer</Name>
                                <Name>Madeline Suindah, Staff Writer</Name>
                                <Name>Ruby Zeidman, Staff Writer</Name>
                                <Name>Nirutti Charupaisankit, Columbia Daily Spectator</Name>
                                <Name>Haleigh Stewart, Columbia Daily Spectator</Name>
                                <Name>Maya Sulkin, Columbia Daily Spectator</Name>
                            </Section>
                            <Section>
                                <SectionName>Engagement</SectionName>
                                <Name>Kailin Huang, Engagement Manager</Name>
                                <Name>Samantha Turk, Engagement Manager</Name>
                                <Name>El Chu, Engagement Manager</Name>
                                <Name>Grace Chee, Engagement Analyst</Name>
                            </Section>
                        </Column>
                        <Column>
                            <Section>
                                <SectionName>Cover Illustration</SectionName>
                                <Name>Ji Yoon Sim, Deputy Illustrations Editor</Name>
                                <Name>Mac Jackson, Staff Illustrator</Name>
                            </Section>
                            <Section>
                                <SectionName>Illustrations</SectionName>
                                <Name>Yingjie Wang, Illustrations Editor</Name>
                                <Name>Ji Yoon Sim, Deputy Illustrations Editor</Name>
                                <Name>Julian Michaud, Deputy Illustrations Editor</Name>
                                <Name>Sadia Sharif, Deputy Illustrations Editor</Name>
                                <Name>Mac Jackson, Staff Illustrator</Name>
                                <Name>Katya Reichert, Staff Illustrator</Name>
                                <Name>Max Graves, Staff Illustrator</Name>
                                <Name>Olya Sukonrat, Staff Illustrator</Name>
                            </Section>


                            <Section>
                                <SectionName>Copy</SectionName>
                                <Name>Olivia Vella, Head Copy Editor</Name>
                                <Name>Kaylene Su Yee Chong, Deputy Copy Editor</Name>
                                <Name>Renuka Balakrishnan, Deputy Copy Editor</Name>
                                <Name>Katherine Carraway, Deputy Copy Editor</Name>
                                <Name>Ronit Dhulia , Deputy Copy Editor</Name>
                                <Name>Maria Levit, Deputy Copy Editor</Name>
                                <Name>Emma Grungold, Associate Copy Editor</Name>
                                <Name>Safia Aladlouni , Associate Copy Editor</Name>
                                <Name>Sadie Rochman , Associate Copy Editor</Name>
                                <Name>Yvin Shin , Associate Copy Editor</Name>
                                <Name>Abby Sim , Associate Copy Editor</Name>
                                <Name>Natarsha Yan , Associate Copy Editor</Name>
                                <Name>Fritzie Schwentker, Associate Copy Editor</Name>
                                <Name>Lanah Wyne , Associate Copy Editor</Name>
                                <Name>Grace O'Malley , Associate Copy Editor</Name>
                                <Name>Reena Bromberg Gaber, Associate Copy Editor</Name>
                                <Name>Kaela Aalto, Preslotter</Name>
                                <Name>Rose Leveen, Preslotter</Name>
                                <Name>August Phillips, Preslotter</Name>
                                <Name>Emily Stone, Preslotter</Name>
                                <Name>Neena Dzur, Preslotter</Name>
                                <Name>Natalie DiFusco, Preslotter</Name>
                                <Name>Sophia Lee, Preslotter</Name>
                                <Name>Jenny Wang, Preslotter</Name>
                                <Name>Emma Moralez, Preslotter</Name>
                                <Name>Pun Setpattanachai, Preslotter</Name>
                                <Name>Posey Chiddix, Preslotter</Name>
                                <Name>Ainhoa Petri-Hidalgo, Preslotter</Name>
                                <Name>Lizzy Yee, Preslotter</Name>
                                <Name>Sally Kaye, Preslotter</Name>
                            </Section>
                        </Column>
                    </Row>

                </Container>
            </Border>
        </Wrapper>
    )
};

export default LetterEditor;