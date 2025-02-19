"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { BookDetailsWrapper, BookTitle, BookDescription, ButtonWrapper } from './BookDetailsPage.styles'; 
import { getBookById, getAIInsights } from '@/app/services/bookService';
import Spinner from '@/app/components/Spinner';
import GenericButton from '@/app/components/Button';

const BookDetails = () => {
  const { id } = useParams();
  const router = useRouter();

  const [book, setBook] = useState(null);
  const [aiInsights, setAiInsights] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    if (id) {
      const fetchBookDetails = async () => {
        try {
          const bookData = await getBookById(id);
          setBook(bookData);
        } catch (error) {
          console.error('Error fetching book details:', error);
        } finally {
          setLoading(false); 
        }
      };

      fetchBookDetails();
    }
  }, [id]);

  const handleAIInsights = async () => {
    if (id) {
      try {
        const insights = await getAIInsights(id);
        setAiInsights(insights);
      } catch (error) {
        console.error('Error fetching AI insights:', error);
      }
    }
  };

  if (loading) return <Spinner />; 

  return (
<BookDetailsWrapper>
  {book == null ? (
    <p>Book not found</p>
  ) : (
    <>
      <BookTitle>{book.title}</BookTitle>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>
      <p><strong>Publication Year:</strong> {book.publicationYear}</p>

      <BookDescription>{book.description}</BookDescription>

      <ButtonWrapper>
        <GenericButton onClick={handleAIInsights}>Get AI Insights</GenericButton>
        <GenericButton $bgColor="#dc3545" $hoverBgColor="#b52b3a" onClick={() => router.back()}>Back</GenericButton>
      </ButtonWrapper>

      {aiInsights && (
        <div>
          <h2>AI Insights</h2>
          <p>{aiInsights}</p>
        </div>
      )}
    </>
  )}
</BookDetailsWrapper>

  );
};

export default BookDetails;
