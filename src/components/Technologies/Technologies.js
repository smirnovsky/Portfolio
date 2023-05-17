import React from 'react';
import { DiCss3, DiFirebase, DiGitBranch, DiHtml5, DiJavascript, DiNpm, DiPhotoshop, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle style={{ marginTop: '60px' }}>
      Технологии
    </SectionTitle>
    <SectionText>
      Ниже перечислены технологии, которыми я владею на данный момент. <br />
      Список постоянно обновляется.
    </SectionText>
    <List>
    <ListItem>
        <DiHtml5 size='3rem' />
        <ListContainer>
          <ListTitle>HTML</ListTitle>
          <ListParagraph>
            Семантическая, кроссбраузерная верстка.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiCss3 size='3rem' />
        <ListContainer>
          <ListTitle>CSS</ListTitle>
          <ListParagraph>
            Адаптивня верстка. 
            Flex, Grid, препроцессоры Sass, LESS
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJavascript size='3rem' />
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
          <ListParagraph>
            ES6 Syntax,
            Базовые знания Typescript
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>React</ListTitle>
          <ListParagraph>
            Hooks
          </ListParagraph>
        </ListContainer>
      </ListItem>


      <ListItem>
        <DiNpm size='3rem' />
        <ListContainer>
          <ListTitle>NPM</ListTitle>
          <ListParagraph>
            
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Базовые знания <br />
            Node.js, PHP
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiPhotoshop size='3rem' />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Работа с макетами <br />
            Figma. Знания Photoshop
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiGitBranch size='3rem' />
        <ListContainer>
          <ListTitle>VCS</ListTitle>
          <ListParagraph>
            Github
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
