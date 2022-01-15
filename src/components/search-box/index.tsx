import { FC } from "react";
import { HiSearch } from "react-icons/hi";
import styles from "./search-box.module.scss";

interface SearchBoxProps {
    searchCountries: (filter: string) => void;
 }

const SearchBox: FC<SearchBoxProps> = ({searchCountries}) => {

    return (
        <div className={styles.input}>
            <label htmlFor="search-country">
                <HiSearch />
            </label>
            <input
                id="search-country"
                type="text"
                onChange={(e) => searchCountries(e.target.value)}
                placeholder="Search for a country..."
            />
        </div>
    );
};

export default SearchBox;