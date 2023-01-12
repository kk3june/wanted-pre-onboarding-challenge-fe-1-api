import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

const StyledLayout = styled.div`
  width: 350px;
  height: 500px;
  margin: 200px auto;
`;

export default function Layout({ children }: PropsWithChildren) {
  return <StyledLayout>{children}</StyledLayout>;
}
