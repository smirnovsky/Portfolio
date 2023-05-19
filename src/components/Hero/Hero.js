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
        Ознакомиться с моим резюме, а также скачать его для печати можно по кнопке ниже.
      </SectionText>
      <Button onClick={() => window.location = 'https://aleksei-smirnov-cv.vercel.app/'} >Тык</Button>
    </LeftSection>
  </Section>
);

export default Hero;