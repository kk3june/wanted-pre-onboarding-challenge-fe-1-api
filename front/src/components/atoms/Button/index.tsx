import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

type Props = PropsWithChildren & {
  type: 'button' | 'submit';
  className?: string;
  isLogin?: boolean;
  isDisable?: boolean;
  onClick?: () => void;
};

const StyledBtn = styled.button<Props>`
  width: 100%;
  height: 50px;
  border-radius: 20px;
  border-style: none;
  font-size: 18px;
  background: ${({ isLogin }) =>
    isLogin
      ? 'linear-gradient(-135deg, rgb(0, 231, 149) 0%, rgb(0, 187, 221) 100%)'
      : 'transparent'};
`;

export const Button = ({
  type,
  className,
  isLogin,
  isDisable,
  children,
  onClick,
}: Props) => {
  return (
    <StyledBtn
      type={type}
      className={className}
      disabled={isDisable}
      isLogin={isLogin}
      onClick={onClick}
    >
      {children}
    </StyledBtn>
  );
};
