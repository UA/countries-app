import { FC, useContext } from "react";
import { ThemeContext } from "../../providers/Theme";
import { HiOutlineMoon, HiMoon } from "react-icons/hi";
import styles from "./theme-button.module.scss";

interface ThemeButtonProps {}

const ThemeButton: FC<ThemeButtonProps> = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <button className={styles.theme_button} onClick={changeTheme}>
      {theme === "light" ? (
        <>
        <HiOutlineMoon className="icon" />
          <span>Dark Mode</span>
        </>
      ) : (
        <>
          <HiMoon className="icon" />
          <span>Light Mode</span>
        </>
      )}
    </button>
  );
};

export default ThemeButton;