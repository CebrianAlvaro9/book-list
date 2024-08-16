import { useEffect, useState } from "react";
import { Book, Genre } from "../types/book";

export const getBooksHook = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [wishList, setWishList] = useState<Book[]>([]);

  const getBooks = async () => {
    try {
      const response = await fetch("http://localhost:3000/library");
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const data: Book[] = await response.json();

      // extract genres
      const genresExtraction = data.map((book) => book.book.genre);
      const uniqueGenres = [...new Set(genresExtraction)];

      setGenres(uniqueGenres);

      //filter by genres

      setBooks(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getBooks();
    const wishListStoraged = sessionStorage.getItem("wishList");
    if (wishListStoraged) {
      setWishList(JSON.parse(wishListStoraged));
    }
  }, []);

  return { books, genres, wishList, setWishList };
};
