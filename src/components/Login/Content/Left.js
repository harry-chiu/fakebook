import React from 'react';
import styled from 'styled-components';
import IntroImage from './intro.png';
import palette from '../../../palette';

const Container = styled.div`
  margin-top: 36px;
  width: 580px;
`;

const Intro = styled.h3`
  margin: 0;
  font-size: 20px;
  color: ${palette.login.content.intro};
  width: 450px;
`;

const Image = styled.img`
  display: block;
`;

const Left = () => {
  return (
    <Container>
      <Intro>Fakebook，讓你和親朋好友保持聯繫，隨時分享生活中的每一刻。</Intro>
      <Image src={IntroImage} />
    </Container>
  );
};

export default Left;
