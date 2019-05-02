import React from "react";
import styled from 'styled-components';
import {navigate} from "gatsby";

const Container = styled.div`
  width: 50%;
  margin: 1em 0;
  
`;

const Project = styled.div`
  display: inline-block;
  border: 1px solid gray;
  padding: 1em;
  margin-right: 1em;
  cursor: pointer;
  width: 40%;
  :hover {
    background-color: #eee;
    transform: translateY(-5px);
  }
  transition: transform .5s ease;
`;

const ProjectHeader = styled.h3`
  margin-bottom: .2em;
`;

const DetailLink = styled.a`
  display: inline-block;
  margin-right: 1em;
`;

const StyledNavigate = ({text, link}) =>
    <DetailLink onClick={() => navigate(link)}>
        {text}
    </DetailLink>;

const StyledAnchor = ({text, link}) =>
    <DetailLink href={link} target={'_blank'}>
        {text}
    </DetailLink>;


export const PortfolioPreview = () =>
    <Container>
        <h1>Side Projects</h1>
        <div className={'portfolioContainer'}>
            <Project>
                <ProjectHeader>Kitchen Quoter</ProjectHeader>
                <p>A calculator that generates quotes based on user-specified fields and formula</p>
                <StyledNavigate text={'Blog Posts'} link={'/tags/kitchen-quoter/1'}/>
            </Project>
            <Project>
                <ProjectHeader>Landing Pages</ProjectHeader>
                <p>A complete process for delivering reusable landing page using Gatsby JS and AWS</p>
                <StyledNavigate text={'Blog Posts'} link={'/tags/landing-pages/1'}/>
                <StyledAnchor text={'See Code'} link={'https://github.com/rajjeet/charismacondos'}/>
            </Project>
        </div>
    </Container>;
