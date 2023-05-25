<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stylesheet.css">
    <title>Spill</title>
</head>
<body>

    <div id="UIs">

        <div class="UI" id="UI1">
            <div id="displayWindow" class="UI_box" onclick="screenClicked()">
            
                <div id="textbox" onclick="screenClicked()">Trykk her for å starte spillet </div>
                <div id="desctext">BigStake</div>
            </div>
            
            <div class="FAQimgDiv">

                <div class="FAQimg">
                    <img src="Bilder & SVG filer\Settings.svg" alt="Åpne instillinger" height="40">
                </div>

                <div class="FAQconthidden">

                    <a href="faq.html">
                        <img class="FAQimg" src="Bilder & SVG filer\FAQ.svg" alt="FAQ link knapp" height="40">
                    </a>
                    <div class="FAQimg">
                        <img src="Bilder & SVG filer\Save.svg" alt="Lagre Spill knapp" height="40">
                    </div>
                
                </div>

            </div>

        </div>


        <div class="UI" id="UI2">
            <div class="UI_box" id="UIStats">
                
                
                <div id="hpBox" class="barBox" onclick="endreHp(20, 'hpBar')">
                    <div id="hpBar">(Helse)</div>
                </div>
                
                
                <div id="manaBox" class="barBox">
                    <div id="manabar">(Mana)</div>
                </div>
                
            </div>
            <div class="UI_box" id="typebox">
            </div>
            <div class="UI_box" id="fightBox">



                <div class="enemyBox" id="enemyBox1">
                    <div class="enemyHP" id="enemyHP1">(test)</div>
                </div>

            </div>

        </div>
        <div class="UI" id="UI3">
            <div class="UI_box">
                <div class="ui_overskrift">Ikke angitt</div>
            </div>
            <div class="UI_box" id="inventoryBox">
                <div class="ui_overskrift">Inventar</div>
                <?php
                    echo '<div class="inventoryItem" onmouseenter="itemDesc(basicSword)" onmouseleave="clearitemDesc()">sverdEksempel</div>';
                ?>
                <div class="inventoryItem" onmouseenter="itemDesc(basicSword)" onmouseleave="clearitemDesc()">basicSword</div>
            </div>
        </div>


    </div>
    <script src="våpen.js"></script>
    <script src="battle.js"></script>
    <script src="text.js"></script>
    <script src="script.js"></script>
</body>
</html>