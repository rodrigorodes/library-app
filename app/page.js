"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import GenericButton from "./components/Button";

const HomePage = () => {
  const router = useRouter();

  return (
    <div>
      <Title>Home</Title>
      <GenericButton $bgColor="#0056b3" $hoverBgColor="#003d80" onClick={() => router.push("/books")}>
        Book List
      </GenericButton>
    </div>
  );
};

export default HomePage;

const Title = styled.h1`
  margin-bottom: 20px;
`;
