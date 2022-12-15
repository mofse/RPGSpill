var basicSword = {
    navn: "basicSword",
    aktiv: 1,
    dmg: 12,
    desc: "Ett simpelt, godt slitt jern sværd. God får å bekjempe store grønnsaker og frukt."
}
var synthetic = {
    aktiv: 0,
    dmg: 1000000,
    spec: "enzyme 420",
    desc: "plantebasert, recepie funnet av big bug lady, laget i basic crafting table ",
}
var items = [basicSword];



var inventory = [];
inventory.push(basicSword);
console.log(items);
