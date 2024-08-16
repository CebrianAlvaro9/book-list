interface Props {
  maxPages: number;
  minPages: number;
  pagesRange: number;
  setPagesRange: (pagesRange: number) => void;
}
export const ByPageRange = ({
  maxPages,
  minPages,
  pagesRange,
  setPagesRange,
}: Props) => {
  return (
    <div>
      <label
        htmlFor="default-range"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Pages min.{minPages} max.{maxPages}
      </label>

      <input
        type="range"
        min={minPages}
        max={maxPages}
        step={1}
        value={pagesRange}
        onChange={(e) => setPagesRange(parseInt(e.target.value))}
        style={{ width: "100%" }}
      />
      {pagesRange > 0 && (
        <div className="text-sm font-medium text-gray-900 dark:text-white">
          Value: {pagesRange}
        </div>
      )}
    </div>
  );
};
