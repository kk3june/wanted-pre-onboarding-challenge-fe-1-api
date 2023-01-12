import { Button } from '../../atoms/Button';
import styled from '@emotion/styled';

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
`;

export default function SignTab() {
  return (
    <BtnContainer>
      <Button type="button">Log In</Button>
      <Button type="button">Sign Up</Button>
    </BtnContainer>
  );
}
