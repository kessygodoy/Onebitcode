let spaceships: Array<Spaceship> = []   

interface Spaceship {
    name: string,
    pilot: string,
    crewLimit: number,
    crew: Array<string>,
    inMission: boolean
}

function addSpaceship(): void {
    const  name = prompt("Insira o nome da nave: ")
    const pilot = prompt("Insira o nome do piloto: ")
    const crewLimit = Number(prompt("Insira o limite de tripulantes: "))
    const crew = []
    const inMission = false

    if(!name || !pilot || !crewLimit) return alert("Por favor, preencha todos os campos!")

    spaceships.push({
        name,
        pilot,
        crewLimit,
        crew,
        inMission
    })

    alert(`A nave ${name} foi registrada com sucesso!`)
}

function addMember(): void {
    const spaceshipIndex = Number(prompt("Insira o index da nave: "))
    const memberName = prompt("Insira o nome do tripulante: ")
    const spaceship = spaceships[spaceshipIndex]

    if(!memberName) return alert("Por favor digite o nome do tripulante!")
    if(!spaceship) return alert("Nave não encontrada!")
    if(spaceship.crew.length >= spaceship.crewLimit) return alert("Limite de tripulantes atingido!")
    spaceship.crew.push(memberName)
    alert(`O tripulante ${memberName} foi adicionado com sucesso!`)
}

function sendSpaceshipToMission(): void{
    const spaceshipIndex = Number(prompt("Insira o index da nave: "))
    const spaceship = spaceships[spaceshipIndex]

    if(!spaceship) return alert("Nave não encontrada!")
    if(spaceship.inMission) return alert("Nave já em missão!")
    if(spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) return alert("Nave precisa de mais tripulantes!")
    spaceship.inMission = true
    alert(`A nave ${spaceship.name} foi enviada em uma missão!`)
}

function showSpaceships(): void{
    alert(`Naves registradas: ${spaceships.length}
        ${spaceships.map((spaceship, index) => `${index} - ${spaceship.name}
            Pilot:${spaceship.pilot}, Cew Limit: ${spaceship.crewLimit}, Crew: ${spaceship.crew}, In Mission: ${spaceship.inMission}`)}`)
}

function menu(): void{
    let selectedOption: string | null
    do {
        selectedOption = prompt(`
            Escolha uma das opções abaixo: \n
            1 - Registrar uma nave \n
            2 - Adicionar membro da tripulação \n
            3 - Enviar nave em missão \n
            4 - Mostrar naves registradas \n
            5 - Encerrar programa`)
        switch(selectedOption){
            case "1":
                addSpaceship()
                break
            case "2":
                addMember()
                break
            case "3":
                sendSpaceshipToMission()
                break
            case "4":
                showSpaceships()
                break
            case "5":
                alert("Encerrando programa...")
                break
            default:
                alert("Opção inválida!")
        }
    } while(selectedOption !== "5")
}

menu()