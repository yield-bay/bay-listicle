import { SearchIcon } from "@heroicons/react/outline";
import { trackEventWithProperty } from "@utils/analytics";

type SearchInputProps = {
  term: string;
  setTerm(newTerm: string): void;
};

export default function SearchInputGroup({ term, setTerm }: SearchInputProps) {
  return (
    <div className="max-w-lg">
      <div className="relative flex max-w-full sm:w-4/6 rounded-md shadow-sm ring-transparent">
        <div className="absolute pl-3 left-0 inset-y-0 flex items-center pointer-events-none">
          <SearchIcon
            className="h-4 w-4 text-gray-400 dark:text-gray-300 transition-all duration-200"
            aria-hidden="true"
          />
        </div>
        <input
          type="search"
          id="text"
          value={term}
          onChange={(event) => {
            setTerm(event.target.value);
            trackEventWithProperty("farm-search"); // No proprty as none required
          }}
          className="block w-full pl-10 py-2 pr-3 font-normal focus:ring-1 ring-neutral-300 dark:ring-neutral-500 text-neutral-500 dark:text-neutral-400 bg-neutral-100 border-none outline-none text-sm sm:text-sm md:text-md rounded-md dark:bg-gray-700 transition-all duration-200"
          placeholder="Search by token, chain or protocol name"
        />
      </div>
    </div>
  );
}
