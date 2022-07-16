import { SearchIcon } from "@heroicons/react/outline";

type SearchInputProps = {
  term: string;
  setTerm(newTerm: string): void;
};

export default function SearchInputGroup({ term, setTerm }: SearchInputProps) {
  return (
    <div>
      <div className="relative inline-flex w-full sm:w-4/6 rounded-md shadow-sm ring-transparent">
        <div className="absolute pl-3 left-0 inset-y-0 flex items-center pointer-events-none">
          <SearchIcon
            className="h-4 w-4 text-gray-400 dark:text-gray-300"
            aria-hidden="true"
          />
        </div>
        <input
          type="search"
          id="text"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
          className="block w-full pl-10 py-2 pr-3 font-normal text-gray-500 bg-gray-100 border-none outline-none dark:text-gray-400 sm:text-sm rounded-md dark:bg-gray-700"
          placeholder="Search by Token, chain or protocol name"
        />
      </div>
    </div>
  );
}
