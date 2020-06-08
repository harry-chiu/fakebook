import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../../palette';

const Container = styled.header`
  color: white;
  background: ${palette.login.header.background};
  padding-top: 16px;
`;

const Wrapper = styled.div`
  width: 980px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 40px;
`;

const ActionsContainer = styled.div`
  display: flex;
`;

const Field = styled.div`
  margin-left: 16px;
  font-size: 14px;
`;

const Label = styled.label`
  display: block;
  height: 24px;
`;

const Input = styled.input`
  width: 150px;
  height: 23px;
  border: 1px solid ${palette.login.header.input.border};
`;

const Extra = styled.div`
  height: 24px;
`;

const StyledLink = styled(Link)`
  color: ${palette.login.header.link};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  color: white;
  font-weight: bold;
  background: ${palette.login.header.button.background};
  border: 1px solid ${palette.login.header.button.border};
`;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>fakebook</Logo>
        <ActionsContainer>
          <Field>
            <Label>電子郵件或電話</Label>
            <Input />
          </Field>
          <Field>
            <Label>密碼</Label>
            <Input />
            <Extra>
              <StyledLink to="/login/forgot-password">忘記密碼？</StyledLink>
            </Extra>
          </Field>
          <Field>
            <Label></Label>
            <Button>登入</Button>
          </Field>
        </ActionsContainer>
      </Wrapper>
    </Container>
  );
};

export default Header;
