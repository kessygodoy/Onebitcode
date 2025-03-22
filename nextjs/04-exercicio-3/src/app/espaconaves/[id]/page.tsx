"use client"
import Spaceship from "@/components/Spaceship";
import spaceships from "../../../../spaceships.json"
import { useParams } from "next/navigation";

export default function Page() {
    const params = useParams()

    if (params.id === undefined) return <h1>Id não encontrado</h1>

    const idNumber =  +params.id
    const spaceshisp = spaceships.find((spaceship) => spaceship.id === + idNumber)

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