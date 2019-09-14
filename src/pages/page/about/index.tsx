import React from 'react';
import Layout from '../../../components/layout';
import AuthorSocialLinkGroup from '../../../components/author-social-link-group';
import AuthorCard from '../../../components/author-card';
import { S } from '../../../components/post-listing';
import Seo from '../../../components/seo';

export type TProps = {
  className?: string;
};

const AboutPage: React.FC<TProps> = ({ className }) => (
  <Layout>
    <Seo />
    <div className={className}>
      <h1>About Me</h1>
      <S.Main>
        <div>
          <p>
            I&apos;m Raj and welcome to my blog site, Ortmesh! The purpose of Ortmesh is to share my
            journey of learning to build amazing web applications that have impact.
          </p>
          <p>
            My website shares my blog posts and side projects. There&apos;s isn&apos;t much content
            yet as I&apos;m focusing on building this website. See the code at
            <a href="https://github.com/rajjeet/gatsby-blog"> GitHub</a>
            .
          </p>
          <h3>Work Experience</h3>
          <p>
            For the past few years, I was working as a full stack web developer at TD Canada Trust
            in Toronto. My areas of specialties are in React JS web apps, SQL Server databases, .NET
            APIs, and AWS design and automation. Recently, I&apos;ve joined Walmart Labs and
            focusing
            heavily on React Native development.
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

export default AboutPage;
