import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects' >
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {[
        {
          title: 'Project1',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius illum temporibus unde non error!'
        },
        {
          title: 'Project2',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius illum temporibus unde non error!'
        },
        {
          title: 'Project3',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius illum temporibus unde non error!'
        },
        {
          title: 'Project4',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius illum temporibus unde non error!'
        },
      ].map((project) => (
        <div>
          {project.title}
          <br />
          {project.description}
        </div>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;