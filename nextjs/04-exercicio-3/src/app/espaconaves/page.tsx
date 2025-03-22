import Link from "next/link"
import spaceships from "../../../spaceships.json"
import Styles from "./style.module.css"

export default function Page() {
    return (
        <div className={Styles.container}>
            <h1>Todas as Espaçonaves</h1>
            <div className={Styles.buttons}>
                {spaceships.map((spaceship) => (
                    <Link 
                    className={Styles.spaceshipButton}
                    key={spaceship.id} 
                    href={`/espaconaves/${spaceship.id}`}
                    >{spaceship.name}</Link>
                ))}
            </div>
        </div>
    )
}