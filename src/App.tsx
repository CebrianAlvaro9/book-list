import "./App.css";
import { BookList } from "./components/BookList";
import { Filters } from "./components/Filters";
import { getBooksHook } from "./hooks/getBooksHook";
import { filterBookHook } from "./hooks/filterBooksHook";
import { filterBooksByPageRangeHook } from "./hooks/filterBooksByPageRangeHook";
import { filterBooksByTitleHook } from "./hooks/filterBooksByTitleHook";

function App() {
  // need to create a hool to filter by genre
  const { books, genres } = getBooksHook();
  const { filteredBooks, setSelectedGenre, maxPages, minPages } =
    filterBookHook(books);

  const { filteredBookByPageRange, pagesRange, setPagesRange } =
    filterBooksByPageRangeHook(filteredBooks);

  const { filteredBooksByTitle, setSearchInput } = filterBooksByTitleHook(
    filteredBookByPageRange
  );

  return (
    <>
      <header>
        <div className=" display flex-col flex justify-center items-center p-2 ">
          <h1 className="text-5xl font-bold my-2 ">Book List</h1>
          <p>Available books: {books.length}</p>
          <Filters
            genres={genres}
            setSelectedGenre={setSelectedGenre}
            maxPages={maxPages}
            minPages={minPages}
            pagesRange={pagesRange}
            setPagesRange={setPagesRange}
            setSearchInput={setSearchInput}
          />
        </div>
      </header>
      <section className="p-5">
        <BookList books={filteredBooksByTitle} />
      </section>
    </>
  );
}

export default App;
