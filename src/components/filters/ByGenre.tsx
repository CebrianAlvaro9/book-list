import React from "react";

interface Props {
  genres: string[];
  handleOnChangeFilter: (e: any) => void;
}

export const ByGenre = ({ genres, handleOnChangeFilter }: Props) => {
  return (
    <form className="max-w-sm mx-auto">
      <label
        form="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select a genre
      </label>
      <select
        defaultValue="Select"
        onChange={handleOnChangeFilter}
        id="genres"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option key="" value="">
          Select a genre
        </option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </form>
  );
};
