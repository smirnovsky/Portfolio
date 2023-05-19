import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      {/* <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px'  }}><Span>Hello World!</Span>
          
        </a>
      </Link> */}
      <DiCssdeck  style={{ marginTop: '8px' }} />
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Проекты</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Технологии</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>Познакомимся?</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/smirnovsky'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/alexey-smirnov-b4793023b/'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/smirnovsky/'>
        <AiFillInstagram size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
