"use client";
import React from 'react';
import BookList from './components/BookList';  
import { useRouter } from 'next/navigation';
import { ButtonWrapper, Title } from './BookPage.styles';  
import GenericButton from '@/app/components/Button';

const BookPage = () => {
  const router = useRouter();

  return (
    <>
      <Title>List of books</Title>
      <BookList />
      <ButtonWrapper>
        <GenericButton $bgColor="#dc3545" $hoverBgColor="#b52b3a" onClick={() => router.back()}>
          Back
        </GenericButton>
      </ButtonWrapper>
    </>
  );
};

export default BookPage;
