import React from 'react';
import styled from 'styled-components';
import Left from './Left';
import Right from './Right';
import palette from '../../../palette';

const Container = styled.main`
  background: linear-gradient(
    ${palette.login.content.bacgkround.top},
    ${palette.login.content.bacgkround.bottom}
  );
`;

const Wrapper = styled.div`
  width: 980px;
  margin: 0 auto;
  display: flex;
`;

const Content = () => {
  return (
    <Container>
      <Wrapper>
        <Left />
        <Right />
      </Wrapper>
    </Container>
  );
};

export default Content;
