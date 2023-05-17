import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+905347825175'>+90(534)782-51-75</LinkItem>
          <LinkItem href='tel:+79114187313'>+7(911)418-73-13</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:smirnovsk28@gmail.com'>smirnovsk28@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Aleksei Smirnov 2023</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https//github.com'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https//linkedin.com'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons href='https//instagram.com'>
            <AiFillInstagram size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
