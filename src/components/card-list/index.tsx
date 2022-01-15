import { FC } from "react";
import { Country } from "../../models/Country";
import Card from "../card";
import styles from "./card-list.module.scss";

interface CardListProps {
  countries: Country[]
 }

const CardList: FC<CardListProps> = ({countries}) => {
 
  return (
    <>
      <div className={styles.countries}>
        {countries.map((country, i) => (
          <Card country={country} key={`country-${i}`} />
        ))}
      </div>
    </>
  );
};

export default CardList