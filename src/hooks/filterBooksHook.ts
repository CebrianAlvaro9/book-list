import { useMemo, useState } from "react";
import { Book } from "../types/book";

export const filterBookHook = (books: Book[]) => {
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const filteredBooks = useMemo(() => {
    return selectedGenre && selectedGenre.length > 0
      ? books.filter((book) => book.book.genre === selectedGenre)
      : books;
  }, [books, selectedGenre]);

  const maxPages = useMemo(() => {
    return Math.max(...filteredBooks.map((book) => book.book.pages));
  }, [filteredBooks]);
  const minPages = useMemo(() => {
    return Math.min(...filteredBooks.map((book) => book.book.pages));
  }, [filteredBooks]);

  return {
    filteredBooks,
    setSelectedGenre,
    maxPages,
    minPages,
  };
};
