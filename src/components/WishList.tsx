import { Book } from "../types/book";

interface Props {
  wishList: Book[];
  setWishList: (wishList: Book[]) => void;
}

export const WishList = ({ wishList, setWishList }: Props) => {
  const deleteBook = (book: Book) => {
    const newWishList = wishList.filter((b) => b.book.ISBN !== book.book.ISBN);
    setWishList(newWishList);
    sessionStorage.setItem("wishList", JSON.stringify(newWishList));
  };

  return (
    <>
      <header className="">
        <div className=" display flex-col flex justify-center items-center pt-8 ">
          <h1 className="text-3xl font-bold my-2 ">Wish List</h1>
        </div>
      </header>
      <div>
        <section className="pt-5">
          <ul className="flex flex-wrap gap-1 justify-center">
            {wishList.map((book) => (
              <li
                key={book.book.ISBN}
                className="relative p-1 w-2/5 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <button
                  onClick={() => deleteBook(book)}
                  className="absolute top-0 left-0 bg-stone-500 text-white rounded-full w-6 h-6 flex justify-center items-center hover:bg-stone-600 focus:outline-none"
                >
                  -
                </button>
                <img className="w-full" src={book.book.cover} alt="" />
                <h1 className="text-2xl p-2">{book.book.title}</h1>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};
