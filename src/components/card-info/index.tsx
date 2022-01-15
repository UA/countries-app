import { FC } from "react";
import styles from "./card-info.module.scss";
interface CardInfoProps {
  label: string;
  value: string | number;
  className?: string;
}

const CardInfo: FC<CardInfoProps> = ({ label, value, className }) => {
  return (
    <div className={[styles.card_info, className].join(" ")}>
      <strong>{label}</strong>
      <span>{value}</span>
    </div>
  );
};

export default CardInfo;