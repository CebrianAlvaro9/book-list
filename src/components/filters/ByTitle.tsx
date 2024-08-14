interface Props {
  setSearchInput: (searchInput: string) => void;
}
export const ByTitle = ({ setSearchInput }: Props) => {
  return (
    <div>
      <p>Search By title</p>
      <input
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
        className="w-full p-1 border border-gray-300 rounded"
      />
    </div>
  );
};
