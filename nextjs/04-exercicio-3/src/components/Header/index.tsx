import Link from "next/link";
import styles from "./styles.module.css";
export default function Page() {
    return (
        <header>
            <div className={styles.header}>
                <h5>Exercicio 3 - Catálogo de Espaçonaves</h5>
                <div className={styles.links}>
                    <Link href={"/"}>Início</Link>
                    <Link href={"/espaconaves"}>Espaçonaves</Link>
                    <Link href={"/categorias"}>Categorias</Link>
                </div>
            </div>

        </header>
    )
}