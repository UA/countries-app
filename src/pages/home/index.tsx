import axios from "axios";
import { FC, useEffect, useState } from "react";
import CardList from "../../components/card-list";
import DropdownMenu from "../../components/dropdown-menu";
import Loading from "../../components/loading";
import SearchBox from "../../components/search-box";
import { Country } from "../../models/Country";
import styles from "./home.module.scss";

interface HomeProps { }

interface Search {
    query: string;
    region: string;
}

const Home: FC<HomeProps> = () => {
    const regions: string[] = [
        "Filter by region",
        "Africa",
        "Americas",
        "Asia",
        "Europe",
        "Oceania"
    ];
    const [countries, setCountries] = useState<Country[]>([])
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([])
    const [search, setSearch] = useState<Search>({ query: "", region: "" });

    useEffect(() => {
        axios.get('https://restcountries.com/v2/all')
            .then(response => {
                setCountries(response.data)
                setFilteredCountries(response.data)
            })
            .catch(error => console.log({ error }))
    }, [])

    useEffect(() => {
        const filterCountries = () => {
            let filterResult = countries;
            if (search.region !== 'Filter by region') {
                filterResult = countries.filter((country: any) =>
                    country.region.toLowerCase().includes(search.region.toLowerCase())
                );
            }

            if (search.query) {
                const searchFilter = filterResult.filter((country: any) =>
                    country.name.toLowerCase().includes(search.query.toLowerCase())
                );
                setFilteredCountries(searchFilter)
            } else {
                setFilteredCountries(filterResult)
            }
        }

        filterCountries()
    }, [countries, search])





    const setQuery = (query: string) => {
        setSearch((prev) => ({ ...prev, query }));
    }

    const setRegion = (region: string) => {
        setSearch((prev) => ({ ...prev, region }));
    }

    return (
        <div className={styles.container}>
            {
                countries.length > 0 ?
                <>
                    <header className={styles.header}>
                        <SearchBox searchCountries={(query) => setQuery(query)} />
                        <DropdownMenu regions={regions} filteredRegion={(region) => setRegion(region)} />
                    </header>
                    <CardList countries={filteredCountries} />
                </> :
                <Loading />
            }
        </div>
    );
};

export default Home;