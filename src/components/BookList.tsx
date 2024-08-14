import { Book } from "../types/book";

interface Props {
  books: Book[];
}
export const BookList = ({ books }: Props) => {
  return (
    <div>
      <ul className="flex flex-wrap  gap-1 justify-center">
        {books.map((book) => (
          <li
            key={book.book.ISBN}
            className="p-2 w-1/6 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <img className="w-full" src={book.book.cover} alt="" />
            <h1 className="text-2xl p-2">{book.book.title}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};
