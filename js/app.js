let tab_ligue1 = [ "Angers SCO", "AJ Auxerre", "Stade Brestois 29", "Le Havre AC", "RC Lens", "LOSC Lille", "Olympique Lyonnais", "Olympique de Marseille", "AS Monaco FC", "Montpellier Hérault SC", "FC Nantes", "OGC Nice", "Paris Saint-Germain", "Stade de Reims", "Stade Rennais FC", "AS Saint-Étienne", "Toulouse FC", "RC Strasbourg Alsace", "ES Troyes AC", "Clermont Foot 63", "SM Caen"];

const score = Math.floor(Math.random() * 8); // Score de 0 à 8.

function operationPronostic(num){ return num * 2 }
function autoPlayerFoot(num){ return Math.floor(Math.random() * num) }

function playerFootPronostix(){
    let tab = [];
    let numberPlayer = Number(prompt("Choisisser les équipes compris entre 0 et 10 qui joue cet periode !"));
        if(numberPlayer <= 10){
            for(let i = 0; i < operationPronostic(numberPlayer); i = i + 1){
                tab.push(tab_ligue1[autoPlayerFoot(tab_ligue1.length)])
            }
        console.log(tab)
        } else {
        alert("Le nombre de joueurs est trop élevé pour le déroulement du pronostic !")
        console.log('Le tournois est annulé : ERROR !')
        false;
        }
    }

playerFootPronostix()