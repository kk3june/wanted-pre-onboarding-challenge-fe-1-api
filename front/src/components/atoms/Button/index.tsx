import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

type Props = PropsWithChildren & {
  type: 'button' | 'submit';
  className?: string;
  isDisable?: boolean;
};

const StyledBtn = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 20px;
  border-style: none;
  font-size: 18px;
  background: linear-gradient(
    -135deg,
    rgb(97, 87, 255) 0%,
    rgb(153, 51, 255) 100%
  );
`;

export const Button = ({ type, className, isDisable, children }: Props) => {
  return (
    <StyledBtn type={type} className={className} disabled={isDisable}>
      {children}
    </StyledBtn>
  );
};
