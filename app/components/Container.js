// app/components/Container.js
"use client";

import React from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  flex: 1; 
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-right: auto;
  margin-left: auto;

 margin-bottom: 40px;
  padding: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #fff;
  border-radius: 4px;
`;


const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
