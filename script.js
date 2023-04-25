console.log("script");
/*---------------UI funksjoner---------------*/
function endreHp(nyHP, hpboxNavn){
    if(nyHP > HP){
        document.getElementById(hpboxNavn).style.transition = "0.5s";
        nyHP = HP;
        HP = HP - nyHP;
    } else{
        HP = HP - nyHP;
    }
    document.getElementById(hpboxNavn).style.width = HP + "%";
}
function itemDesc(itemid) {
    document.getElementById("desctext").innerHTML = itemid.desc;
}
function clearitemDesc(e) {
    document.getElementById("desctext").innerHTML = "";
}


/*Variabler*/
var i = 0;

/*Tutorial*/
var tutorialComplete = 0;
var tutorialPart = 1;

/*Battle*/
var battleActive = 0;
var battlePlayertur = 0;
var battleMostertur = 0;
var enemyCount = 0;

var fiendeNr1 = {};
var fiendeNr2 = {};
var fiendeNr3 = {};
var fiendeNr4 = {};

var HP = 100


/*Current bane*/ 
var typingSpeedMS = 70;
var stagePart = 1;
var level = 1;
var optatt = 0;
var stageClear = 1;
/*KUNN LEGG TIL ELLER TREKK FRA "opptatt" eller "stageClear", IKKE REDEFINER VARIABLEREN!*/



/*---------------Stage funskjoner---------------*/
/*Viktige funskjoner som brukes over flere baner ligger her*/

function restart(){
    i = 0;
    

    tutorialComplete = 0;
    tutorialPart = 1;
    
    battleActive = 0;
    
    stagePart = 1;
    level = 1;
    optatt = 0;
    stageClear = 1;

}


function lesTekst(teksten, typingSpeedInput) {
    /*Brukes for å lese opp tekst i hovedDisplay*/
    if (typingSpeedInput > 0) {
        typingSpeedMS = typingSpeedInput;
    }

    var lagrettekst = teksten;
    optatt += +1;

    document.getElementById("textbox").style.color = "white";
    tekstOutput();


    function tekstOutput(){

        if (i < lagrettekst.length) {
            console.log("opptatt = " + optatt);

            document.getElementById("textbox").innerHTML += lagrettekst.charAt(i);
            i++;
            setTimeout(tekstOutput, typingSpeedMS);
        } else {
            i = 0;
            optatt += -1;
            console.log("opptatt = " + optatt);
            typingSpeedMS = 70;
            /*document.getElementById("textbox").style.color = "lightcoral";*/
            /*send en funksjon for det over, og ha en if-løkke skjekke om en påstand er sant, som om jeg er i bane x*/ 
        }

    }

}






function screenClicked() {
    /*Valg og rekkefølge fra baner skjer her. selve banene ligger under -stages-.*/
    /*hver gang sjermen klikkes spilles denne funksjonen. hvilken bane som skal spilles blir holdt styr med variabelen "stagePart".*/
    /*Pass på å sette stagePart til riktig nummer så riktig bane spilles neste klikk.*/



    if (optatt == 0){
        /*Om spillet er currently opptat med noe*/
        console.log("Click registrert. current stage = " + stagePart);



        if (stageClear == 1) {
            /*Om spillet er klar til å endre stage. Trekk fra stageclear hvis en bane pågår, og legg tilbake stageClear når ferdig*/
            playStage();
        }



    } else if (optatt == 1) {
        typingSpeedMS = 20;
    }
}

function playStage() {
    if (battleActive == 1) {
        battleTurn();
    }
    else if (tutorialComplete == 0) {
        if (tutorialPart == 1) {
            tutorialRequest();
        } else if (tutorialPart == 2) {
            doTutorial2();
        } else if (tutorialPart == 3) {
            doTutorial3();
        } else if (tutorialPart == 4) {
            doTutorial4();
        } else if (tutorialPart == 5) {
            doTutorial5();
            tutorialComplete += +1;
        }
    } else if (level == 1){

         if(stagePart == 1){
            stage1();
            stagePart += +1;
        } else if (stagePart == 2) {
            stage2();
            stagePart += +1;
            console.log("stagePart = " + stagePart)
        } else if (stagePart == 3){
            stage3();
            stagePart += +1;
        } 

    } 
}
/*--------------Battle Funksjoner--------------*/



function startBattle(enemies, enemyname1, enemyname2, enemyname3, enemyname4){
    document.getElementById("textbox").innerHTML = "";
    console.log("StartBattle"); 
    for (i = 0; i < enemies; i++) {
        document.getElementById("fightBox").innerHTML += '<div class="enemyBox" id="enemyBox' + (i+1) + '"><div class="enemyHP" id="enemyHP' + (i+1) + '"></div></div>';
    } 
    for (i = 0; i < items.length; i++) {
        console.log(items);
        var itemnamesaver = "";
        itemnamesaver = items[i];
        document.getElementById("inventoryBox").innerHTML += '<div class="inventoryItem" id="'+ itemnamesaver.navn + '" onmouseenter="itemDesc(' + itemnamesaver + ')" onmouseleave="itemDesc(' + itemnamesaver + ')>' + itemnamesaver.navn + '</div>';
    }
    document.getElementById("hpBox").style.display = "flex";
    document.getElementById("manaBox").style.display = "flex";
    enemyCount = enemies;
    battleMostertur = enemyCount;
    fiendeNr1 = enemyname1;
    fiendeNr2 = enemyname2;
    fiendeNr3 = enemyname3;
    fiendeNr4 = enemyname4;
    var fiender = [fiendeNr1, fiendeNr2, fiendeNr3, fiendeNr4];
    battleActive = 1;
    lesTekst(kampStarttxt);
    /*Mer om fighten ligger under funksjonen onscreenclicked. battleActive funksjonen hinder progress i spillet*/
}

function battleTurn() {

    console.log("fiendeNr: " + fiendeNr1 + fiendeNr2 + fiendeNr3 + fiendeNr4);
    console.log("enemyCount= " + enemyCount);
    console.log("optatt = " + optatt);
    console.log("StageClear = " + stageClear);
    console.log("battlePlayertur = " + battlePlayertur);
    console.log("battleMostertur = " + battleMostertur);


    if (enemyCount == 0) {

        document.getElementById("fightBox").innerHTML = "";
        battleActive = 0;
        lesTekst(kampSlutttxt);

    } else if (battlePlayertur == 1) {
        fightOptions();
        console.log("Spiller Tur");
        battlePlayertur = 0;
        battleMostertur = enemyCount;

    } else if (battlePlayertur == 0) {


        if (battleMostertur > 0) {
            console.log("monter Tur");
            battleMostertur--;
        } else if (battleMostertur == 0) {
            battlePlayertur = 1;
            console.log("monster Tur over");
        }

    } else {
        console.log("battleError")
    }
    console.log("battlePlayertur = " + battlePlayertur);
    console.log("battleMostertur = " + battleMostertur);

    

}
function fightOptions() {
    document.getElementById("typebox").innerHTML += '<div class="choiceDiv" onclick="">Kjemp</div><div class="choiceDiv" onclick="">Items</div>';
}


/*---------------Stages---------------*/
/*Informasjon og detaljer om hva som skjer spesificly i hvært av banene ligger her. */
/*Husk å fjerne tekst som alerede kan ligge fra forrige bane*/ 
/*variablenen opptatt og stageClear indikerer om det alerede skjer noe. bruk den med en if løkke for å ikke overlappe kode*/
/**/

/*Stage Tutorial*/
function tutorialRequest() {
    stageClear += -1;
    document.getElementById("textbox").innerHTML = "";
    lesTekst(tutorialReqtxt);
    document.getElementById("typebox").innerHTML += '<div class="choiceDiv" onclick="doTutorial0(1)">Gjør Tutorial</div><div class="choiceDiv" onclick="doTutorial0(2)">Hopp over Tutorial</div>';
    
}

function doTutorial0(theChoice) {
    if (optatt == 0) {
        document.getElementById("textbox").innerHTML = "";
        if (theChoice == 1){
            doTutorial1();

        } else if (theChoice == 2) {
            document.getElementById("textbox").innerHTML = "";
            document.getElementById("typebox").innerHTML = "";
            lesTekst (tutorialCanceltxt);
    
            tutorialComplete = 1;
            stageClear += +1;
        }
    }
}

function doTutorial1() {
    document.getElementById("typebox").innerHTML = "";
    document.getElementById("displayWindow").style.border = "5px solid blue";
    lesTekst(tutorial1txt);
    stageClear++;
    tutorialPart++;
    console.log("tutorialPart:" + tutorialPart)
    console.log("stageClear:" + stageClear)
}


function doTutorial2() {
    document.getElementById("textbox").innerHTML = "";
    document.getElementById("displayWindow").style.border = "2px double white";
    document.getElementById("UIStats").style.border = "5px solid blue";
    document.getElementById("fightBox").style.border = "5px solid blue";
    document.getElementById("typebox").innerHTML = "";
    lesTekst(tutorial2txt);
    tutorialPart++;
}


function doTutorial3() {
    document.getElementById("textbox").innerHTML = "";
    document.getElementById("UIStats").style.border = "1px solid white";
    document.getElementById("fightBox").style.border = "1px solid white";
    document.getElementById("typebox").style.border = "5px solid blue";
    lesTekst(tutorial3txt);
    tutorialPart++;
}


function doTutorial4() {
    document.getElementById("textbox").innerHTML = "";
    document.getElementById("typebox").style.border = "1px solid white";
    lesTekst(tutorial4txt, 100);
    tutorialPart++;

}


function doTutorial5() {
    startBattle(2, EnemyTest, EnemyTest);
}

/*Stage 1*/
function stage1() {
    document.getElementById("textbox").innerHTML = "";
    document.getElementById("typebox").style.border = "1px solid white";
    lesTekst(level1txt1);
}

function stage2() {
    document.getElementById("textbox").innerHTML = "";
    lesTekst(level1txt2);
}
function stage3(){
    document.getElementById("textbox").innerHTML = "";
    document.getElementById("hpBox").style.display = "flex";
    lesTekst(level1txt3);
}