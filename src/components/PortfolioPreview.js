import React from "react";
import styled from 'styled-components';

const S = {
    Container: styled.div`
        width: 50%;
        margin: 1em 0;
`,
    Project: styled.div`
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
        h3 {
          margin-bottom: .2em;
        }
`,
};

function Project({header, description}) {
    return <S.Project>
        <h3>{header}</h3>
        <p>{description}</p>
    </S.Project>;
}

export const PortfolioPreview = () =>
    <S.Container>
        <h1>Side Projects</h1>
        <div>
            <Project
                header={'Kitchen Quoter'}
                description={'A calculator that generates quotes based on user-specified fields and formula'}
                techTags={['AWS S3', 'AWS CloudFront', 'ReactJS + Redux', 'Jest', 'Electron']}
            />
            <Project
                header={'Landing Pages'}
                description={'An automated, repeatable process for delivering fast, responsive landing page using Gatsby JS and AWS'}
            />
        </div>
    </S.Container>;
