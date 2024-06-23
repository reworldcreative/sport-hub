import { FC, useState, useRef, ChangeEvent, useEffect } from "react";
import "./SearchBlock.scss";
import { ReactComponent as SearchIcon } from "@icons/search.svg";

const suggestions = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew"];

const SearchBlock: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchBlockRef = useRef<HTMLDivElement>(null);
  const [listVisible, setListVisible] = useState<boolean>(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setQuery(input);
    setListVisible(true);
    if (input.length > 0) {
      const filtered = suggestions.filter((suggestion) => suggestion.toLowerCase().includes(input.toLowerCase()));
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const toggleSearch = () => {
    setIsOpen(!isOpen);
    if (!isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (searchBlockRef.current && !searchBlockRef.current.contains(event.target as Node)) {
      setListVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchBlockRef} className={`horizontal-container search-block ${isOpen ? "active" : ""}`}>
      <SearchIcon className="search-block__icon" width="24" height="24" onClick={toggleSearch} />
      <input type="text" className="search-block__input text" value={query} onChange={handleChange} ref={inputRef} />

      <ul className={`search-block__list ${listVisible && filteredSuggestions.length > 0 ? "visible" : ""}`}>
        {filteredSuggestions.map((suggestion, index) => (
          <li key={index} className="search-block__item">
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBlock;
