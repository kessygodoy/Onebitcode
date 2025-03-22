import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
    return (
        <div className={styles.container}>
            <h1>Conheça as Naves do Universo Star Wars</h1>
            <Link href={"/espaconaves"} className={"button"}>Ver todas</Link>
        </div>
    );
}