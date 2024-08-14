import { useMemo, useState } from "react";
import { Book } from "../types/book";

export const filterBooksByPageRangeHook = (filteredBooks: Book[]) => {
  const [pagesRange, setPagesRange] = useState<number>(0);

  const filteredBookByPageRange = useMemo(() => {
    return filteredBooks.filter((book) => book.book.pages >= pagesRange);
  }, [filteredBooks, pagesRange]);

  return {
    filteredBookByPageRange,
    pagesRange,
    setPagesRange,
  };
};
