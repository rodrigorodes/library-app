"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f8d7da;
  color: #721c24;
`;

const ErrorTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #b52b3a;
  }
`;

const ErrorPage = ({ error, reset }) => {
  const router = useRouter();

  return (
    <ErrorWrapper>
      <ErrorTitle>Oops! Something went wrong.</ErrorTitle>
      <ErrorMessage>{error?.message || "An unexpected error occurred. Please try again later."}</ErrorMessage>

      <ButtonWrapper>
        <Button onClick={() => reset()}>Try Again</Button>
        <Button onClick={() => router.push("/")}>Go to Home</Button>
      </ButtonWrapper>
    </ErrorWrapper>
  );
};

export default ErrorPage;
