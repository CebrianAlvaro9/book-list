import { Book } from "../types/book";

interface Props {
  books: Book[];
  wishList: Book[];
  setWishList: (wishList: Book[]) => void;
}
export const BookList = ({ books, wishList, setWishList }: Props) => {
  const isBookInWishList = (wishList: Book[], book: { book: { ISBN: any } }) =>
    wishList.some((e) => e.book.ISBN == book.book.ISBN);

  const handleAddToWishList = (book: Book) => {
    if (!isBookInWishList(wishList, book)) {
      setWishList([...wishList, book]);
      sessionStorage.setItem("wishList", JSON.stringify([...wishList, book]));
    }
  };

  return (
    <div>
      <ul className="flex flex-wrap gap-1 justify-center">
        {books.map((book) => (
          <li
            key={book.book.ISBN}
            className="relative p-2 w-56 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            {!isBookInWishList(wishList, book) && (
              <button
                onClick={() => handleAddToWishList(book)}
                className="absolute top-0 left-0 bg-stone-500 text-white rounded-full w-6 h-6 flex justify-center items-center hover:bg-stone-600 focus:outline-none"
              >
                +
              </button>
            )}
            <img className="w-full" src={book.book.cover} alt="" />
            <h1 className="text-2xl p-2">{book.book.title}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};
