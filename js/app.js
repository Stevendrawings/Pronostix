let liste_A_ligue1 = {
    equipe0: {
        ligue: 1,
        name: "Angers SCO", //
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/d/d3/Logo_Angers_SCO_-_2021.svg"
    },
    equipe1: {
        ligue: 1,
        name: "AJ Auxerre", //
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f6/Logo_AJ_Auxerre_2024.svg/langfr-800px-Logo_AJ_Auxerre_2024.svg.png"
    },
    equipe2: {
        ligue: 1,
        name: "Stade Brestois 29", //
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4c/Logo_SB29_2010.svg/1200px-Logo_SB29_2010.svg.png"
    },
    equipe3: {
        ligue: 1,
        name: "Olympique de Marseille", //
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/4/43/Logo_Olympique_de_Marseille.svg"
    },
    equipe4: {
        ligue: 1,
        name: "LOSC Lille", //
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/6/62/Logo_LOSC_Lille_2018.svg"
    },
    equipe5: {
        ligue: 1,
        name: "Olympique Lyonnais", //
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/a/a5/Logo_Olympique_Lyonnais_-_2022.svg"
    },
    equipe6: {
        ligue: 1,
        name:  "AS Monaco FC", //
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/5/58/Logo_AS_Monaco_FC_-_2021.svg/346px-Logo_AS_Monaco_FC_-_2021.svg.png?20210903233857"
    },
    equipe7: {
        ligue: 1,
        name: "Montpellier Hérault SC", //
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Logo_-_Montpellier_H%C3%A9rault_Sport_Club_%28MHSC%29.png"
    },
    equipe8: {
        ligue: 1,
        name: "FC Nantes", //
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Logo_FC_Nantes_%28avec_fond%29_-_2019.svg/364px-Logo_FC_Nantes_%28avec_fond%29_-_2019.svg.png"
    },
    equipe9: {
        ligue: 1,
        name: "Paris Saint-Germain", //
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/600px-Paris_Saint-Germain_Logo.svg.png?20231024114603"
    }
}

let liste_B_ligue1 = {
    equipe10: {
        ligue: 1,
        name: "OGC Nice", //
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/b/b1/Logo_OGC_Nice_2013.svg"
    },
    equipe11: {
        ligue: 1,
        name: "Stade de Reims", //
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/a/ad/Logo_Stade_de_Reims_2020_%28Alternatif%29.svg"
    },
    equipe12: {
        ligue: 1,
        name: "Stade Rennais FC", //
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/e/e9/Logo_Stade_Rennais_FC.svg"
    },
    equipe13: {
        ligue: 1,
        name: "AS Saint-Étienne", //
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/3/3e/AS_Saint-Etienne-logo_2022.svg/481px-AS_Saint-Etienne-logo_2022.svg.png?20220627070721"
    },
    equipe14: {
        ligue: 1,
        name:  "Toulouse FC", //
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/8/8b/Logo_Toulouse_FC_2018.svg/960px-Logo_Toulouse_FC_2018.svg.png?20210815152536"
    },
    equipe15: {
        ligue: 1,
        name: "RC Strasbourg Alsace", //
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/7/70/Racing_Club_de_Strasbourg_Alsace_%28RC_Strasbourg_-_RCS_-_RCSA%29_logo_officiel.svg/600px-Racing_Club_de_Strasbourg_Alsace_%28RC_Strasbourg_-_RCS_-_RCSA%29_logo_officiel.svg.png?20180528170410"
    },
    equipe16: {
        ligue: 1,
        name: "Clermont Foot 63", //
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/22/Logo_Clermont_Foot_63_2021.svg/506px-Logo_Clermont_Foot_63_2021.svg.png?20240704071049"
    },
    equipe17: {
        ligue: 1,
        name: "SM Caen", //
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/7/79/Logo_SM_Caen_2016.svg/500px-Logo_SM_Caen_2016.svg.png?20200813190358"
    },
    equipe18: {
        ligue: 1,
        name: "RC lens", //
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/c/c5/Logo_RC_Lens.svg"
    },
    equipe19: {
        ligue: 1,
        name: "Havre AC", //
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/e/e6/Logo_Havre_AC_2012.svg"
    },
    equipe20: {
        ligue: 2,
        name: "AC Ajaccio", //
        but: scoreBut(),
        logo: "https://upload.wikimedia.org/wikipedia/fr/5/53/Logo_AC_Ajaccio_2015.svg"
    },
}

function scoreBut(){  return Math.floor(Math.random() * 6); }

function operationPronostic(num){ return num * 2 }

function autoPlayerFoot(num){ return Math.floor(Math.random() * num) }

function playerFootPronostix(){ 
    
    let numberPlayer = Number(prompt("Choisisser les équipes compris entre 0 et 10 qui joue cet periode !"));

    const contentchild = document.createElement('div');
    const content_atome = document.createElement('div');
    const shadow_atome = document.createElement('div');
    const atome_red = document.createElement('div');
    const atome_blue = document.createElement('div');

    let counter = 0;
    let counte_play = 0; 

    const sp1 = document.createElement('div')
    const tagNewDiv = document.getElementsByTagName('body')[0];
    const curentTagDiv = document.getElementById("div");

    const newDiv_counter = document.createElement("div");
    const curentContentDiv = document.querySelector(".content-pronostix");
    tagNewDiv.appendChild(sp1)
    sp1.classList.add("content_counter_pronostix");
    let parentCounter = document.querySelector(".content_counter_pronostix")
    newDiv_counter.classList.add("counter_div")
    newDiv_counter.innerHTML = ("<p>" + (counte_play += counte_play) + " " + "€" + "</p>")
    parentCounter.appendChild(newDiv_counter)
    document.body.insertBefore(sp1, curentTagDiv)
    document.body.insertBefore(curentContentDiv, curentTagDiv)
    tagNewDiv.appendChild(curentContentDiv)
    const scripttor = document.getElementsByTagName("script")[0]
    tagNewDiv.appendChild(scripttor)

        if(numberPlayer <= 10){

            for(let i = 0; i < operationPronostic(numberPlayer); i = i + 1){  

                let arr0 = Object.entries(liste_A_ligue1);
                let arr1 = Object.entries(liste_B_ligue1);
                
                let tabs0 = arr0[autoPlayerFoot(arr0.length)];
                let tabs1 = arr1[autoPlayerFoot(arr1.length)];
                
                let myImage0 = new Image(80);
                let myImage1 = new Image(80);

                    myImage0.src = tabs0[1].logo;
                    myImage1.src = tabs1[1].logo;
             
                const curentDiv = document.getElementById("div");
                const newDiv = document.createElement("div");
                const middleContent = document.createElement("div");
                const divNewMiddle_1 = document.createElement('div');
                const divNewMiddle_2 = document.createElement('div');
                const result_true = document.createElement('div');
                const result_false = document.createElement('div');
                const result_ERROR = document.createElement('div');

                newDiv.appendChild(myImage0).classList.add("logo-pronostix");
                newDiv.appendChild(myImage1).classList.add("logo-pronostix");
                
                document.body.insertBefore(newDiv, curentDiv).classList.add("cell-pronostix");

                contentchild.classList.add("contentChild-pronostix"); curentContentDiv.appendChild(shadow_atome)
                shadow_atome.classList.add('shadow-atome'); curentContentDiv.appendChild(content_atome);
                content_atome.classList.add("content_atome"); content_atome.appendChild(atome_red);
                atome_red.classList.add("atome_red"); content_atome.appendChild(atome_blue);
                atome_blue.classList.add("atome_blue"); curentContentDiv.appendChild(contentchild);
                contentchild.appendChild(newDiv); 
                const cell_pronostix = document.querySelectorAll(".cell-pronostix");

                const tabs_0 = [cell_pronostix[i].childNodes[0]];
                const tabs_1 = [cell_pronostix[i].childNodes[1]];

                const tableau = tabs_0.concat(tabs_1);

                for(let j = 0; j < tableau.length; j = j + 1){
                    const listDivImg = document.createElement('div');
                    const newScoreList = document.createElement('div');
                    document.body.insertBefore(listDivImg, curentDiv).classList.add("img-pronostix")
                    listDivImg.appendChild(tableau[j])
                    document.body.insertBefore(middleContent, curentDiv).classList.add("middle-content-pronostix")
                    newDiv.appendChild(middleContent) // Ajout de la div middle entre les divs principal des joueurs 
                    document.body.insertBefore(divNewMiddle_1, curentDiv).classList.add("counter-card-pronostix")
                    middleContent.appendChild(divNewMiddle_1)
                    divNewMiddle_1.innerHTML = "<span>" + operationPronostic(numberPlayer) + " / " + (i+1) + "</span>";
                    document.body.insertBefore(divNewMiddle_2, curentDiv).classList.add("score-pronostix")
                    middleContent.appendChild(divNewMiddle_2)
                    document.body.insertBefore(result_true, curentDiv).classList.add("result-true")
                    middleContent.appendChild(result_true)
                    document.body.insertBefore(result_false, curentDiv).classList.add("result-false")
                    middleContent.appendChild(result_false)
                    document.body.insertBefore(result_ERROR, curentDiv).classList.add("result-error")
                    middleContent.appendChild(result_ERROR)
                    document.body.insertBefore(newScoreList, curentDiv).classList.add("but-pronostix");
                    divNewMiddle_2.appendChild(newScoreList); newDiv.appendChild(listDivImg);

                    const listDivName = document.createElement('div');
                    document.body.insertBefore(listDivName, curentDiv).classList.add("name-player-pronostix");
                    listDivImg.appendChild(listDivName); const tab_name = [tabs0[1].name, tabs1[1].name];
                    listDivImg.lastChild.innerHTML = "<p>" + tab_name[j] + "</p>";
                    newScoreList.innerHTML = "<input type='text' name='score' class='input-pronostix' placeholder='0' maxlength='1'>"; } 
                                        
                        const divNewMiddle_3 = document.createElement('div');
                        const btn = document.createElement("BUTTON");
                        const t = document.createTextNode("Validation");
                        document.body.insertBefore(divNewMiddle_3, curentDiv).classList.add("content-btn-pronostix");
                        middleContent.appendChild(divNewMiddle_3);
                        document.body.insertBefore(btn, curentDiv).classList.add("btn-pronostix")
                        divNewMiddle_3.appendChild(btn); btn.appendChild(t);
                        const buttonPronostix = document.querySelectorAll('.btn-pronostix');
                        buttonPronostix[i].style.display = "block"; const tab_but = [tabs0[1].but, tabs1[1].but]; 
                        console.log(tab_but);

                            function loadingResultatPronostix(){ console.log("Chargement de la page...") }
   
                            function updatatedScored(){  
                                const array_but = cell_pronostix[i].childNodes[1].childNodes[1].childNodes;
                                const indexScore = [array_but[0].childNodes[0], array_but[1].childNodes[0]];
                                const div_result_true = document.querySelectorAll(".result-true");   
                                const div_result_false = document.querySelectorAll(".result-false");   

                                console.log("--------- [Resultat en cours] ---------"); 

                                function awaitExecution(){
                                    console.log("--------- [Affichage du resultat] ---------");
                                    console.log(tab_but);
                                    console.log(parseInt(indexScore[0].value) === parseInt(tab_but[0]), parseInt(indexScore[1].value) === parseInt(tab_but[1]))
                                        if(((parseInt(indexScore[0].value) === NaN) || (parseInt(indexScore[1].value) !== NaN)) && ((parseInt(indexScore[1].value) !== NaN) || (parseInt(indexScore[1].value) === NaN))){
                                            if((parseInt(indexScore[0].value) === tab_but[0]) && ((parseInt(indexScore[1].value) === tab_but[1]))){
                                                console.log("Bonne réponse");
                                                div_result_true[i].style.display = "block"; 
                                                div_result_true[i].textContent = "Bonne réponse";
                                                newDiv_counter.innerHTML = "<p>" + ((counte_play += 100) + " " + "€") + "</p>";
                                            } else {
                                                    console.log("Mauvaise réponse"); 
                                                    div_result_false[i].style.display = "block"; 
                                                    div_result_false[i].textContent = "Mauvaise réponse";
                                                if(counte_play > 0){
                                                    newDiv_counter.innerHTML = "<p>" + ((counte_play -= 100) + " " + "€") + "</p>";
                                                }
                                            } 
                                        }
                                    } 
                                    setTimeout(awaitExecution, 3000); 
                                }

                            function pushAnim(){
                                (counter+=20);
                                contentchild.style.transform = "translateY("+ Number(-(counter+=newDiv.clientHeight)) +"px)";
                            }

                            function resultat(){
                                pushAnim()   
                                updatatedScored()
                                if(cell_pronostix.length >= operationPronostic(numberPlayer)){
                                    loadingResultatPronostix()
                                    content_atome.style.display = "none";
                                    shadow_atome.style.display = "none";
                                    console.log(curentContentDiv.style.overflow = "visible")
                                    console.log(newDiv_counter.style.transform = "translateY(" + 70 + "px)")
                                    console.log(cell_pronostix[i].clientHeight, cell_pronostix[i].clientHeight * numberPlayer)
                                    console.log(curentContentDiv.style.transform = "translateY("+ (cell_pronostix[i].clientHeight * numberPlayer) +"px)");
                                    console.log("--------- [Fin du match] ---------")
                                }
                            }

                            function btnResult(){ resultat() }  

                            buttonPronostix[i].addEventListener('click', btnResult, true)

                        } 

                    } else {
                        alert("Le nombre de joueurs est trop élevé pour le déroulement du pronostic !");
                        console.log('Le tournois est annulé : ERROR !'); 
                        false;  
                    }
                }

            playerFootPronostix()

 