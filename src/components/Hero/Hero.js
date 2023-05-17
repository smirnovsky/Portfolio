import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Приветствую Вас<br /> в моем личном <br /> портфолио
      </SectionTitle>
      <SectionText>
        Меня зовут Алексей Смирнов. Это мое профессиональное портфолио. <br />
        Ознакомиться с моим резюме можно по кнопке ниже.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'} >Тык</Button>
    </LeftSection>
  </Section>
);

export default Hero;