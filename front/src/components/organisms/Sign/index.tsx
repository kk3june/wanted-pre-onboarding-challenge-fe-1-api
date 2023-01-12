/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import SignTab from '../../molecules/SignTab';
import SignInputs from '../../molecules/SignInputs';
import { Button } from '../../atoms/Button';
import { TextLink } from '../../atoms/Text';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: transparent;
`;
export default function Sign() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const clickSignTab = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container>
      <SignTab isLogin={isLogin} onClick={clickSignTab} />
      <SignInputs />
      <Button
        type="submit"
        css={css`
          background: linear-gradient(
            -135deg,
            rgb(97, 87, 255) 0%,
            rgb(153, 51, 255) 100%
          );
          border-radius: 5px;
        `}
      >
        {isLogin ? 'Log In' : 'Sign Up'}
      </Button>
      <div
        css={css`
          margin-top: 10px;
        `}
      ></div>
    </Container>
  );
}
