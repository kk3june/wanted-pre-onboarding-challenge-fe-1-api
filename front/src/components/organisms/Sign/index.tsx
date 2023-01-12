/** @jsxImportSource @emotion/react */
import React from 'react';
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
  return (
    <Container>
      <SignTab />
      <SignInputs />
      <Button type="submit">Log In</Button>
      <div
        css={css`
          margin-top: 10px;
        `}
      >
        <TextLink>Forgot Your Password</TextLink>
      </div>
    </Container>
  );
}
