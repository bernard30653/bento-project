import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormWrapper = styled.div`
  width: 400px;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
`;

const Title = styled.h1`
  color: #4caf50;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #ff9800;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #e68a00;
  }
`;

const ToggleForms = styled.p`
  color: #4caf50;
  cursor: pointer;
`;

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const switchForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container>
      <FormWrapper>
        {isLogin ? (
          <>
            <Title>登入</Title>
            <form>
              <Input type="email" placeholder="Email" required />
              <Input type="password" placeholder="Password" required />
              <Button>Login</Button>
            </form>
          </>
        ) : (
          <>
            <Title>註冊</Title>
            <form>
              <Input type="text" placeholder="Name" required />
              <Input type="email" placeholder="Email" required />
              <Input type="password" placeholder="Password" required />
              <Button>註冊</Button>
            </form>
          </>
        )}
        <ToggleForms onClick={switchForm}>
          {isLogin ? 'Create an account' : 'Already have an account? Login'}
        </ToggleForms>
      </FormWrapper>
    </Container>
  );
}

export default Login;