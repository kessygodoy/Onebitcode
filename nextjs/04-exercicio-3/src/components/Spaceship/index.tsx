import Link from "next/link"
import Style from "./styles.module.css"
import spaceships from "../../../spaceships.json"

interface spaceshipProps {
    id: number,
    name: string,
    model: string,
    category: string,
    description: string,
    imageUrl: string
}
export default function Spaceship({ id, name, model, category, description, imageUrl }: spaceshipProps) {

    return (
        <div className={Style.spaceship}>
            <h1>{name}</h1>
            <img className={Style.image} src={imageUrl} alt={name} />
            <p>Classe: {category}</p>
            <p>Modelo: {model}</p>
            <p>{description}</p>
            <div className={Style.buttons}>
                <Link href={"/espaconaves"} className={"button"}>Voltar para Espaçonaves</Link>
                <div >
                    <Link href={`/espaconaves/${+id - 1}`}
                        style={{ visibility: +id === 1 ? "hidden" : "visible" }}
                        className={"button"}>Anterior</Link>
                    <Link href={`/espaconaves/${+id + 1}`} 
                        style={{ visibility: +id === spaceships.length ? "hidden" : "visible" }}
                        className={"button"}>Próxima</Link>
                </div>
            </div>
        </div>
    )
}