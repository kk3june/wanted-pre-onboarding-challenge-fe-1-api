import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  className: string;
};

const StyledText = styled.p``;

export const Text = ({ className, children }: Props) => {
  return <StyledText className={className}>{children}</StyledText>;
};

const AnchorTagText = styled.a``;

export const TextLink = ({ children }: PropsWithChildren) => {
  return <AnchorTagText href="/">{children}</AnchorTagText>;
};
