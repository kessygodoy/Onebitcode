"use client"

import Link from "next/link"
import spaceships from "@/../spaceships.json"
import Styles from "./page.module.css"
import { useParams } from "next/navigation";


export default function Page() {
    const { categoria } = useParams();

    if (typeof categoria !== "string") return <h1>Valor nao é string</h1>;
    const categoriaFormatada = categoria.replace("_", " ");
    const categorySpaceships = spaceships.filter((spaceship) => spaceship.category === categoriaFormatada);
    return (
        <div className={Styles.container}>
            <h1>{categoria}</h1>
            <div className={Styles.buttons}>

                {categorySpaceships.map((spaceship) => (
                    <Link key={spaceship.id} href={`/espaconaves/${spaceship.id}`} className={Styles.button}>
                        {spaceship.name}
                    </Link>
                ))}

            </div>
        </div>
    )
}