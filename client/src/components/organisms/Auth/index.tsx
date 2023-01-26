/** @jsxImportSource @emotion/react */
import { FormEvent, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SignTab from '../../molecules/SignTab';
import SignInputs from '../../molecules/SignInputs';
import { Button } from '../../atoms/Button';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  margin: 100px auto;
  background-color: transparent;
`;

const StyledForm = styled.form`
  width: 100%;
`;

export default function Auth() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [userToken, setUserToken] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isValid, setIsValid] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    setUserToken(localStorage.getItem('user-token'));
    if (userToken) router.push('/todos');
  }, [userToken]);

  useEffect(() => {
    if (isLogin && email.length > 0 && password.length > 0) setIsValid(true);
    if (
      !isLogin &&
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0
    )
      setIsValid(true);
  }, [email, password, confirmPassword]);

  const clickSignTab = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailRegExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    // 로그인 로직
    if (isLogin) {
      if (!emailRegExp.test(email)) {
        return alert('이메일 양식이 맞지 않습니다.');
      } else if (password.length < 8) {
        return alert('비밀번호는 8자 이상 입력해주세요.');
      } else {
        axios
          .post('http://localhost:8080/users/login', { email, password })
          .then((res) => {
            const token = res.data.token;
            localStorage.setItem('user-token', token);
            router.push('/');
          });
      }
    }

    // 회원가입 로직
    if (!isLogin) {
      if (!emailRegExp.test(email)) {
        return alert('이메일 양식이 맞지 않습니다.');
      } else if (password.length < 8) {
        return alert('비밀번호는 8자 이상 입력해주세요.');
      } else if (password !== confirmPassword) {
        return alert('비밀번호가 일치하지 않습니다.');
      } else {
        axios
          .post('http://localhost:8080/users/create', { email, password })
          .then((res) => {
            alert(res.data.message);
            setEmail('');
            setPassword('');
            setIsLogin(true);
          });
      }
    }
  };

  return (
    <Container>
      <SignTab isLogin={isLogin} onClick={clickSignTab} />
      <StyledForm onSubmit={handleSubmit}>
        <SignInputs
          isLogin={isLogin}
          handleEmail={setEmail}
          handlePassword={setPassword}
          handleConfirm={setConfirmPassword}
        />
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
          isDisable={isValid ? false : true}
        >
          {isLogin ? 'Log In' : 'Sign Up'}
        </Button>
        <div
          css={css`
            margin-top: 10px;
          `}
        ></div>
      </StyledForm>
    </Container>
  );
}
