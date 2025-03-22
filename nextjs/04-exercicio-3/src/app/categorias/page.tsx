import Link from "next/link"
import spaceships from "@/../spaceships.json"
import Styles from "./page.module.css"

export default function Page() {
    const categoriesSet = new Set(spaceships.map((spaceship) => spaceship.category))
    const categories = Array.from(categoriesSet)
    return (
        <main>

            <h1>Categorias</h1>
            <div className={Styles.buttons}>
                {categories.map((category) => (
                    <Link key={category} href={`/categorias/${category.replace(' ', '_')}`} className={Styles.button}>
                        {category}
                    </Link>
                ))}
            </div>
        </main>
    )
}