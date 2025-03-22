import Spaceship from "@/components/Spaceship";
import spaceships from "../../../../spaceships.json"
// import styles from "./page/page.module.css"

interface spaceshipProps{
    id: number,
    name: string,
    model: string,
    category: string,
    description: string,
    imageUrl: string
}

export default function Page({params}: {params: {id: string}}) {
    console.log(spaceships)
    const spaceshisp = spaceships.find((spaceship) => spaceship.id === +params.id)

    if(!spaceshisp){
        return <h1>Espaçonave não encontrada</h1>
    }

    return(
        <div>
            <Spaceship 
                id={spaceshisp.id}
                name={spaceshisp.name} 
                model={spaceshisp.model} 
                category={spaceshisp.category} 
                description={spaceshisp.description} 
                imageUrl={spaceshisp.imageUrl}
                /> 
        </div>
    )
}