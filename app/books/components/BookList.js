"use client";

import React, { useState, useEffect, useCallback } from "react";
import BookItem from "./BookItem";
import { getBooks, searchBooks } from "@/app/services/bookService";
import { BookListWrapper, SearchWrapper, SearchInput, Button } from "./BookList.styles";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const fetchBooks = useCallback(async () => {
    try {
      const booksData = await getBooks();
      setBooks(booksData.content);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const handleSearch = async () => {
    if (title.trim() || author.trim()) {
      try {
        const booksData = await searchBooks({ title, author });
        setBooks(booksData.content);
      } catch (error) {
        console.error("Error searching books:", error);
      }
    }
  };

  const handleClearSearch = () => {
    setTitle("");
    setAuthor("");
    fetchBooks();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <SearchWrapper>
        <SearchInput
          type="text"
          placeholder="Search by title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <SearchInput
          type="text"
          placeholder="Search by author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Button onClick={handleSearch}>Search</Button>
        {(title || author) && <Button $variant="clear" onClick={handleClearSearch}>Clear</Button>}
      </SearchWrapper>
      <BookListWrapper>
        {books.length ? (
          books.map((book) => <BookItem key={book.id} book={book} />)
        ) : (
          <p>No books found.</p>
        )}
      </BookListWrapper>
    </div>
  );
};

export default BookList;
