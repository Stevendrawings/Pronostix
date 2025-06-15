let tab_ligue1 = {
    equipe0: {
        name: "Angers SCO",
        but: scoreBut(),
        logo: "https://www.footpack.fr/wp-content/uploads/2021/05/logo-angers-sco-868x1024.jpg"
    },
    equipe1: {
        name: "AJ Auxerre",
        but: scoreBut(),
        logo: "https://logodownload.org/wp-content/uploads/2023/04/aj-auxerre-logo-0.png"
    },
    equipe2: {
        name: "Stade Brestois 29",
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4c/Logo_SB29_2010.svg/1200px-Logo_SB29_2010.svg.png"
    },
    equipe3: {
        name: "Olympique de Marseille",
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4c/Logo_SB29_2010.svg/1200px-Logo_SB29_2010.svg.png"
    },
    equipe4: {
        name: "LOSC Lille",
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4c/Logo_SB29_2010.svg/1200px-Logo_SB29_2010.svg.png"
    },
    equipe5: {
        name: "Olympique Lyonnais",
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4c/Logo_SB29_2010.svg/1200px-Logo_SB29_2010.svg.png"
    },
    equipe6: {
        name:  "AS Monaco FC",
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4c/Logo_SB29_2010.svg/1200px-Logo_SB29_2010.svg.png"
    },
    equipe7: {
        name: "Montpellier Hérault SC",
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4c/Logo_SB29_2010.svg/1200px-Logo_SB29_2010.svg.png"
    },
    equipe8: {
        name: "FC Nantes",
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4c/Logo_SB29_2010.svg/1200px-Logo_SB29_2010.svg.png"
    },
    equipe9: {
        name: "Paris Saint-Germain",
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4c/Logo_SB29_2010.svg/1200px-Logo_SB29_2010.svg.png"
    },
    equipe10: {
    name: "OGC Nice",
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4c/Logo_SB29_2010.svg/1200px-Logo_SB29_2010.svg.png"
    },
    equipe11: {
        name: "Stade de Reims",
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4c/Logo_SB29_2010.svg/1200px-Logo_SB29_2010.svg.png"
    },
    equipe12: {
        name: "Stade Rennais FC",
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4c/Logo_SB29_2010.svg/1200px-Logo_SB29_2010.svg.png"
    },
    equipe13: {
        name: "AS Saint-Étienne",
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4c/Logo_SB29_2010.svg/1200px-Logo_SB29_2010.svg.png"
    },
    equipe14: {
        name:  "Toulouse FC",
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4c/Logo_SB29_2010.svg/1200px-Logo_SB29_2010.svg.png"
    },
    equipe15: {
        name: "RC Strasbourg Alsace",
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4c/Logo_SB29_2010.svg/1200px-Logo_SB29_2010.svg.png"
    },
    equipe16: {
        name: "Clermont Foot 63",
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4c/Logo_SB29_2010.svg/1200px-Logo_SB29_2010.svg.png"
    },
    equipe17: {
        name: "SM Caen",
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4c/Logo_SB29_2010.svg/1200px-Logo_SB29_2010.svg.png"
    },
}

function cointMisor(number){ return number }
function scoreBut(){ return Math.floor(Math.random() * 5); }
function operationPronostic(num){ return num * 2 }
function autoPlayerFoot(num){ return Math.floor(Math.random() * num) }

function playerFootPronostix(){
    let numberPlayer = Number(prompt("Choisisser les équipes compris entre 0 et 10 qui joue cet periode !"));
        if(numberPlayer <= 10){
            for(let i = 0; i < operationPronostic(numberPlayer); i = i + 1){
                for(let key in tab_ligue1){
                    if (tab_ligue1.hasOwnProperty(key)) {
                        console.log(tab_ligue1[key]);
                    }
                }
            }  
        } else {
                alert("Le nombre de joueurs est trop élevé pour le déroulement du pronostic !")
                console.log('Le tournois est annulé : ERROR !')
                false;  
        }
        const myImage = new Image(100);
        myImage.src = tab_ligue1.equipe0.logo;
        document.body.appendChild(myImage);
    }
playerFootPronostix()