import { FC, useEffect, useState } from "react";
import CardInfo from "../../components/card-info";
import { HiArrowNarrowLeft } from "react-icons/hi";
import styles from "./detail.module.scss";
import cardStyles from "../../components/card/card.module.scss";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Country } from "../../models/Country";
import Loading from "../../components/loading";

interface DetailProps {
}

type Border = { name: string; alpha3Code: string };

const Detail: FC<DetailProps> = () => {
    const [country, setCountry] = useState<Country>()
    const [borders, setBorders] = useState<Border[]>([])
    const { countryid } = useParams()

    useEffect(() => {

        const fetchCountryData = async () => {
            await axios.get(`https://restcountries.com/v2/alpha/${countryid}`)
                .then(response => {
                    setCountry(response.data)
                    return response.data.borders
                }).catch(error => console.log({ error }))
                .then(async borders => {
                    borders && await axios.get(`https://restcountries.com/v2/alpha?codes=${borders.join(",")}`)
                        .then(response => setBorders(response.data))
                        .catch(error => console.log({ error }))
                })
        }
        fetchCountryData()
    }, [countryid])

    return (
        <main>
            {
                country ? <>
                    <Link to="/">
                        <button className={styles.back_button}>
                            <HiArrowNarrowLeft />
                            <span>Back</span>
                        </button>
                    </Link>
                    <article className={styles.content}>
                        <div className={[cardStyles.image, styles.image].join(" ")}>
                            <img
                                src={country.flag}
                                alt={country.name}
                                width={500}
                                height={300}
                            />
                        </div>
                        <div className={styles.text}>
                            <h1>{country.name}</h1>

                            <div className={styles.info}>
                                <CardInfo
                                    className={styles.info_item}
                                    label="Native Name: "
                                    value={country.nativeName}
                                />

                                <CardInfo
                                    className={styles.info_item}
                                    label="Top Level Domain: "
                                    value={country.topLevelDomain[0]}
                                />

                                <CardInfo
                                    className={styles.info_item}
                                    label="Population: "
                                    value={String(country.population).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                />

                                <CardInfo
                                    className={styles.info_item}
                                    label="Currencies: "
                                    value={Object.values(country.currencies)
                                        .map((currency) => currency.name)?.join(", ")}
                                />

                                <CardInfo
                                    className={styles.info_item}
                                    label="Region: "
                                    value={country.region}
                                />

                                <CardInfo
                                    className={styles.info_item}
                                    label="Languages: "
                                    value={Object.values(country.languages).map((language) => language.name).join(", ")}
                                />

                                <CardInfo
                                    className={styles.info_item}
                                    label="Sub Region: "
                                    value={country.subregion}
                                />

                                <CardInfo
                                    className={styles.info_item}
                                    label="Capital: "
                                    value={country.capital}
                                />
                            </div>

                            {borders.length > 0 && (
                                <div className={styles.borders}>
                                    <strong>Border Countries:</strong>
                                    <div>
                                        {borders.map((border, i) => (
                                            <div className={styles.border} key={`border-${i}`}>
                                                <Link to={`/${border.alpha3Code}`}>
                                                    {border.name}
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                    </article>
                </> : <Loading />
            }
        </main>
    );
};

export default Detail;

