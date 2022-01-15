import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./card.module.scss";
import CardInfo from "../card-info";
import { Country } from "../../models/Country";

interface CardProps {
  country:Country
 }

const Card: FC<CardProps> = ({ country }) => {
    return (
      <div className={styles.card_container}>
        <Link to={`/${country.alpha3Code}`}>
        <div className={styles.image}>
              <img
                src={country.flag}
                alt={country.name}
                width={400}
                height={300}
              />
            </div>
        </Link>
  
        <div className={styles.text}>
          <Link to={`/${country.alpha3Code}`}>
              <h2>{country.name}</h2>
          </Link>
          <CardInfo label="Population: " value={ String(country.population).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} />
          <CardInfo label="Region: " value={country.region} />
          <CardInfo label="Capital: " value={country.capital} />
        </div>
      </div>
    );
  };

  export default Card;