import { FC } from "react";
import styles from "./loading.module.scss";
interface LoadingProps {

}

const Loading: FC<LoadingProps> = () => <div className={styles.pos_center}><div className={styles.loader}></div></div>

export default Loading;