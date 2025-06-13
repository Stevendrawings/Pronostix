let tab_ligue1 = [ "Angers SCO", "AJ Auxerre", "Stade Brestois 29", "Le Havre AC", "RC Lens", "LOSC Lille", "Olympique Lyonnais", "Olympique de Marseille", "AS Monaco FC", "Montpellier Hérault SC", "FC Nantes", "OGC Nice", "Paris Saint-Germain", "Stade de Reims", "Stade Rennais FC", "AS Saint-Étienne", "Toulouse FC", "RC Strasbourg Alsace", "ES Troyes AC", "Clermont Foot 63", "SM Caen"];

const score = Math.floor(Math.random() * 8); // Score de 0 à 8.

function operationPronostic(num){ return num * 2 }
function indexPlayer(tableau, val){ return tableau.indexOf(val); }

function playerFootPronostix(){
    let tab = [];
    let numberPlayer = Number(prompt("Choisisser les équipes compris entre 0 et 10 qui joue cet periode !"));
    if(numberPlayer < 10){
        for(let i = 0; i < operationPronostic(numberPlayer); i = i + 1){
            console.log(tab.push(tab_ligue1[i]))
        }
        console.log(tab)
    } else {
        false;
    }
}

playerFootPronostix()

