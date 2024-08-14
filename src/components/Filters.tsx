import { ByGenre } from "./filters/ByGenre";
import { ByPageRange } from "./filters/ByPageRange";
import { ByTitle } from "./filters/ByTitle";

interface Props {
  genres: string[];
  setSelectedGenre: (genre: string) => void;
  maxPages: number;
  minPages: number;
  pagesRange: number;
  setPagesRange: (pagesRange: number) => void;
  setSearchInput: (searchInput: string) => void;
}
export const Filters = ({
  genres,
  setSelectedGenre,
  maxPages,
  minPages,
  pagesRange,
  setPagesRange,
  setSearchInput,
}: Props) => {
  const handleOnChangeFilter = (e: any) => {
    setSelectedGenre(e.target.value);
    setPagesRange(0);
  };

  return (
    <div className="display flex-row flex justify-center items-center pt-5  gap-12 ">
      <ByGenre genres={genres} handleOnChangeFilter={handleOnChangeFilter} />
      <ByTitle setSearchInput={setSearchInput} />
      <ByPageRange
        maxPages={maxPages}
        minPages={minPages}
        pagesRange={pagesRange}
        setPagesRange={setPagesRange}
      />
    </div>
  );
};
