import "./App.css";
import { BookList } from "./components/BookList";
import { Filters } from "./components/Filters";
import { getBooksHook } from "./hooks/getBooksHook";
import { filterBookHook } from "./hooks/filterBooksHook";
import { filterBooksByPageRangeHook } from "./hooks/filterBooksByPageRangeHook";
import { filterBooksByTitleHook } from "./hooks/filterBooksByTitleHook";
import { WishList } from "./components/WishList";
import { setWishListWithSessionHook } from "./hooks/setWishListWithSessionHook";

function App() {
  const { books, genres } = getBooksHook();
  const { filteredBooks, setSelectedGenre, maxPages, minPages } =
    filterBookHook(books);

  const { filteredBookByPageRange, pagesRange, setPagesRange } =
    filterBooksByPageRangeHook(filteredBooks);

  const { filteredBooksByTitle, setSearchInput } = filterBooksByTitleHook(
    filteredBookByPageRange
  );

  const { wishList, setWishList } = setWishListWithSessionHook();

  return (
    <>
      <div id="Page" className="display flex-row flex">
        <div className={wishList.length > 0 ? "w-9/12" : "w-full"}>
          <header className="">
            <div className=" display flex-col flex justify-center items-center p-2 ">
              <h1 className="text-5xl font-bold my-2 ">Books</h1>
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
          <div>
            <section className="pt-5  ">
              <BookList
                books={filteredBooksByTitle}
                wishList={wishList}
                setWishList={setWishList}
              />
            </section>
          </div>
        </div>

        {wishList.length > 0 && (
          <div className="w-3/12 bg-stone-100 border border-gray-300 my-10 mr-4 rounded-xl">
            <WishList wishList={wishList} setWishList={setWishList} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
