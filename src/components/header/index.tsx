import { FC } from "react";
import ThemeButton from "../theme-button";
import styles from "./header.module.scss";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {

  return (
    <nav className={styles.header}>
        <h3>Where in the world?</h3>
      <ThemeButton />
    </nav>
  );
};

export default Header;