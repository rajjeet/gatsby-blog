import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import AuthorSocialLinkGroup from '../components/AuthorSocialLinkGroup';
import AuthorCard from '../components/AuthorCard';
import SEO from '../components/SEO';
import { S } from '../components/PostListing';

const AboutPage = ({ className }) => (
  <Layout>
    <div className={className}>
      <SEO />
      <h1>About Me</h1>
      <S.Main>
        <div>
          <p>
            I&apos;m Raj and welcome to my blog site, Ortmesh! The purpose of Ortmesh is to share my
            journey of learning to build web applications that help businesses growth drastically.
          </p>
          <p>
            So, how does this work?
          </p>
          <p>
            This blog shares the details of my side projects. The blog posts broken down by
            categories that describe key aspects of a web application. These categories are User
            Experience (UX), User Interface (UI), Frontend, Backend, and DevOps.
          </p>
          <p>
            Don&apos;t care about categories? Just want to know what the project is about?
          </p>
          <p>
            That&apos;s why I have Project pages. These web pages concisely summarize the project
            and connect to all related blog posts, ordered by posted date. The categories help
            narrow blog posts to a specific specialization or skill.
          </p>
          <h3>Work Experience</h3>
          <p>
            For the past few years, I&apos;ve been a full stack web developer at TD Canada Trust in
            Toronto. My areas of specialties are in React JS web apps, SQL Server databases, .NET
            APIs, and AWS design and automation. At work, I&apos;m focused on delivering high
            quality features for an internal project that involves data warehouse automation,
            reporting, data analytics/visualization, and web applications.
          </p>
          <p>
            My current certifications are Certified AWS Solutions Architect and Microsoft Certified
            Professional in Data Management and Analytics.
          </p>
          <h3>Outside of Work</h3>
          <p>
            Other than spending time with family, I&apos;m always coding side projects or writing
            blogs. I&apos;m also looking for ways to help others with my knowledge and skills in
            software development and cloud architecture.
          </p>
        </div>
      </S.Main>
      <S.Sidebar>
        <AuthorCard />
        <AuthorSocialLinkGroup />
      </S.Sidebar>

    </div>
  </Layout>
);

const StyledAboutPage = styled(AboutPage)`

`;

export default StyledAboutPage;
