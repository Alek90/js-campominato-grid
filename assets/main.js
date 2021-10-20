/*  OBBIETTIVI:
    Creare 3 differenti griglie, rispettivamente da 100, da 81 e da 49 celle, sulla base della difficoltà scelta dall'utente.
    Stampata la griglia corrispondente alla difficoltà, quando l'utente clicca su di una cella, questa deve assumere colore azzurro.
*/

// Mi serve una selezione della difficoltà, con valori preimpostati.

// Sulla base del valore scelto, deve essere stampata una specifica griglia (magari aggiungendo una classe con display: block?)

// Evidentemente tra i primi 2 passaggi andrà inserito un avvio per l'evento, magari tramite un bottone "play".

/* Riepilogo: 
    -selezione difficoltà;
    -avvio evento tramite un bottone;
    -stampo a schermo la griglia corrispondente alla difficoltà selezionata.
*/

/* La griglia ha le celle numerate, e deve possedere un evento interno:
    Quando l'utente "clicca" su una cella, avvia l'evento che permette alla cella di assumere un colore predefinito (azzurro).
*/

// Prendiamo il bottone.
const startButton = document.getElementById("start");

// Costruiamo l'evento/azione.
startButton.addEventListener("click", function(){

    //Inizializziamo delle variabili che ci serviranno più avanti:
    let grid = document.getElementById("grid_game");
    let cell = "";


    //Prendiamo in considerazione le selezioni dell'utente:
    let difficultLevel = document.getElementById("choice_difficult").value;
    console.log(difficultLevel);

    //Assegnamo un valore numerico alla selezione dell'utente:
    let intensityLevel = "";

    if(difficultLevel == "easy"){
        intensityLevel = 100;
        grid.className = "easy_grid";
    }else if(difficultLevel =="normal"){
        intensityLevel = 81;
        grid.className = "normal_grid";
    }else {
        intensityLevel = 49;
        grid.className = "hard_grid";
    }

    console.log(intensityLevel);

    // Tramite un ciclo costruiamo la griglia relativa alla difficoltà selezionata:


    console.log(grid);

    for(let i = 1; i <= intensityLevel; i++){

        let cellNumber = document.createElement("p")
        cellNumber.innerHTML = [i];

        let cell = document.createElement("div")
        cell.className = "grid_cell"
        
        cell.append(cellNumber);

        grid.append(cell);
        console.log(grid, cell);
    }
    
})