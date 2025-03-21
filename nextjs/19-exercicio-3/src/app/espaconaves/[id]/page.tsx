import Spaceship from "@/components/Spaceship";
import spaceships from "../../../../spaceships.json"
// import styles from "./page/page.module.css"

interface spaceshipProps{
    id: string,
    name: string,
    model: string,
    category: string,
    description: string,
    imageUrl: string
}

export default function Page({params}: {params: {id: string}}) {
    console.log(spaceships)
    const spaceshisp = spaceships.find((spaceship) => spaceship.id === +params.id)

    return(
        <div>
            <Spaceship {...spaceshisp} />
        </div>
    )
}