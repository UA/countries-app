import { FC, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import styles from "./dropdown-menu.module.scss";

interface DropdownMenuProps { 
    filteredRegion: (filter: string) => void;
    regions: string[]
}

const DropdownMenu: FC<DropdownMenuProps> = ({filteredRegion, regions}) => {
    const [region, setRegion] = useState<string>(regions[0])
    const [showMenu, setShowMenu] = useState<boolean>(false)

    const handleClick = (item: string) => {
        setRegion(item)
        filteredRegion(item)
    }

    return (
        <>
            <button className={styles.drop_down} onClick={()=>setShowMenu(!showMenu)} >
                <div className={styles.title}>
                    {region ?? "Filter by Region"}
                </div>

                <HiChevronDown />

                <div className={`${styles.drop_down_menu} ${showMenu ? styles.show : styles.hide}`}>
                    {regions.map((item, i) => (
                        <div
                            className={styles.option}
                            key={`region-${i}`}
                            onClick={(e)=>handleClick(item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </button>
        </>
    );
};

export default DropdownMenu;