const getCombatEnergy = game.tables.getName("kinetic-energy");
const getCombatGoal = game.tables.getName("combat-goal");
const getCombatTerrain = game.tables.getName("combat-terrain");
const getCombatTension = game.tables.getName("ticking-timebomb");


let n1 = await getCombatGoal.roll();
let n2 = await getCombatEnergy.roll();
let n3 = await getCombatTerrain.roll();
let n4 = await getCombatTension.roll();

let n10 = `<h2> Combat Encounter Generator</h2>
The Players goal is to:<b> ${n1.results[0].data.text} </b> <br> <br>
They need to do it quickly, because: <b> ${n4.results[0].data.text} </b> <br><br>
This encounter will be complicated by the fact that the terrain is: <b> ${n3.results[0].data.text}</b> <br><br>
Something in this scene that could be used by the PCs <i>or</i> foes is:<b> ${n2.results[0].data.text} </b><br><br>
`



ChatMessage.create({
user: game.user._id,
speaker: ChatMessage.getSpeaker({token: actor}),
content: n10
});


//await token.update({name: `${n1.results[0].data.text} ${n2.results[0].data.text}`});
