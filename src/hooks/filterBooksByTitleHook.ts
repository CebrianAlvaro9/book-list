import { useMemo, useState } from "react";
import { Book } from "../types/book";

export const filterBooksByTitleHook = (filteredBookByPageRange: Book[]) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const filteredBooksByTitle = useMemo(() => {
    return searchInput.trim() === ""
      ? filteredBookByPageRange
      : filteredBookByPageRange.filter((book) =>
          book.book.title.toLowerCase().includes(searchInput.toLowerCase())
        );
  }, [filteredBookByPageRange, searchInput]);

  return {
    filteredBooksByTitle,
    setSearchInput,
  };
};
