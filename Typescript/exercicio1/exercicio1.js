var spaceships = [];
function addSpaceship() {
    var name = prompt("Insira o nome da nave: ");
    var pilot = prompt("Insira o nome do piloto: ");
    var crewLimit = Number(prompt("Insira o limite de tripulantes: "));
    var crew = [];
    var inMission = false;
    if (!name || !pilot || !crewLimit)
        return alert("Por favor, preencha todos os campos!");
    spaceships.push({
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crew: crew,
        inMission: inMission
    });
    alert("A nave ".concat(name, " foi registrada com sucesso!"));
}
function addMember() {
    var spaceshipIndex = Number(prompt("Insira o index da nave: "));
    var memberName = prompt("Insira o nome do tripulante: ");
    var spaceship = spaceships[spaceshipIndex];
    if (!memberName)
        return alert("Por favor digite o nome do tripulante!");
    if (!spaceship)
        return alert("Nave não encontrada!");
    if (spaceship.crew.length >= spaceship.crewLimit)
        return alert("Limite de tripulantes atingido!");
    spaceship.crew.push(memberName);
    alert("O tripulante ".concat(memberName, " foi adicionado com sucesso!"));
}
function sendSpaceshipToMission() {
    var spaceshipIndex = Number(prompt("Insira o index da nave: "));
    var spaceship = spaceships[spaceshipIndex];
    if (!spaceship)
        return alert("Nave não encontrada!");
    if (spaceship.inMission)
        return alert("Nave já em missão!");
    if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3))
        return alert("Nave precisa de mais tripulantes!");
    spaceship.inMission = true;
    alert("A nave ".concat(spaceship.name, " foi enviada em uma miss\u00E3o!"));
}
function showSpaceships() {
    alert("Naves registradas: ".concat(spaceships.length, "\n        ").concat(spaceships.map(function (spaceship, index) { return "".concat(index, " - ").concat(spaceship.name, "\n            Pilot:").concat(spaceship.pilot, ", Cew Limit: ").concat(spaceship.crewLimit, ", Crew: ").concat(spaceship.crew, ", In Mission: ").concat(spaceship.inMission); })));
}
function menu() {
    var selectedOption;
    do {
        selectedOption = prompt("\n            Escolha uma das op\u00E7\u00F5es abaixo: \n\n            1 - Registrar uma nave \n\n            2 - Adicionar membro da tripula\u00E7\u00E3o \n\n            3 - Enviar nave em miss\u00E3o \n\n            4 - Mostrar naves registradas \n\n            5 - Encerrar programa");
        switch (selectedOption) {
            case "1":
                addSpaceship();
                break;
            case "2":
                addMember();
                break;
            case "3":
                sendSpaceshipToMission();
                break;
            case "4":
                showSpaceships();
                break;
            case "5":
                alert("Encerrando programa...");
                break;
            default:
                alert("Opção inválida!");
        }
    } while (selectedOption !== "5");
}
menu();
