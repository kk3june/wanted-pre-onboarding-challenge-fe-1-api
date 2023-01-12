import styled from '@emotion/styled';
import { ChangeEvent } from 'react';

type Props = {
  type: 'text' | 'email' | 'password';
  className?: string;
  placeholder: string;
  onChange?: (value: string) => void;
};

const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 10px;
  margin-bottom: 10px;
  border-style: none;
  border-radius: 5px;
  background-color: white;
  font-size: 16px;
  color: black;
`;

export const Input = ({ type, className, placeholder, onChange }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange && onChange(value);
  };
  return (
    <StyledInput
      type={type}
      className={className}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
