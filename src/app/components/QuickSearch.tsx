export default function QuickSearch({
  label,
  value,
  onChange,
  placeholder = "Search",
}: {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="quick-search">
      {label && (
        <label
          htmlFor="search"
          className="block text-sm/6 font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}
      <div className="flex rounded-md bg-white dark:bg-gray-800 outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
        <input
          id="search"
          name="search"
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="block min-w-0 grow px-3 py-1.5 text-base text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-sm/6 bg-transparent"
        />
        <div className="flex py-1.5 pr-1.5">
          <kbd className="inline-flex items-center px-1 font-sans text-xs text-gray-400 dark:text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </kbd>
        </div>
      </div>{" "}
    </div>
  );
}
