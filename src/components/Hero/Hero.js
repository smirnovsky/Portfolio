import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome To <br /> My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpouse of javascriptmastery Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, aliquid?
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'} >Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;