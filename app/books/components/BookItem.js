import React from 'react';
import Link from 'next/link';
import { BookWrapper, BookLink, BookTitle, BookDetails, BookDescription } from './BookItem.styles';

const BookItem = ({ book }) => (
  <BookWrapper>
    <BookLink href={`/books/${book.id}`}>
      <BookTitle>{book.title}</BookTitle>
    </BookLink>
    <BookDetails><strong>Author:</strong> {book.author}</BookDetails>
    <BookDetails><strong>ISBN:</strong> {book.isbn}</BookDetails>
    <BookDetails><strong>Publication Year:</strong> {book.publicationYear}</BookDetails>
    <BookDescription>{book.description}</BookDescription>
  </BookWrapper>
);

export default BookItem;
