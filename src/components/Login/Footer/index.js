import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Divider from '../../shared/Divider';
import { PlusIcon } from '../../../icons';
import languages from './languages.json';
import links from './links.json';
import palette from '../../../palette';

const Container = styled.footer`
  color: ${palette.login.footer.text};
`;

const Wrapper = styled.div`
  width: 980px;
  margin: 0 auto;
  padding: 32px 0;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  font-size: 14px;
`;

const LanguageList = styled(List)`
  margin-left: -8px;
`;

const LanguageListItem = styled(ListItem)`
  padding-left: 8px;
`;

const LinkList = styled(List)`
  margin-left: -16px;
`;

const LinkListItem = styled(ListItem)`
  padding-left: 16px;
`;

const StyledLink = styled(Link)`
  color: ${palette.login.footer.link};
  text-decoration: none;
`;

const Copyright = styled.p`
  margin: 16px 0 0;
  font-size: 12px;
`;

const Button = styled.button`
  padding: 0 8px;
  font-size: 12px;
  color: ${palette.login.footer.button.color};
  background: ${palette.login.footer.button.background};
  border: 1px solid ${palette.login.footer.button.border};
  border-radius: 2px;

  &:hover {
    background: ${palette.login.footer.button.hover.background};
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <LanguageList>
          {languages.map((language) => (
            <LanguageListItem key={language}>
              <StyledLink to="/">{language}</StyledLink>
            </LanguageListItem>
          ))}
          <LanguageListItem>
            <Button>
              <PlusIcon />
            </Button>
          </LanguageListItem>
        </LanguageList>
        <Divider />
        <LinkList>
          {links.map((link) => (
            <LinkListItem key={link}>
              <StyledLink to="/">{link}</StyledLink>
            </LinkListItem>
          ))}
        </LinkList>
        <Copyright>Fakebook © 2020</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
