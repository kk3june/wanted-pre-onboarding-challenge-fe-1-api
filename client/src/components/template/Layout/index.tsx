import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';
import Navbar from '../../molecules/Navbar';

type Props = PropsWithChildren & {
  withOutNav?: boolean;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

export default function Layout({ withOutNav, children }: Props) {
  return (
    <Container>
      {!withOutNav && <Navbar />}
      <Content>{children}</Content>
    </Container>
  );
}
