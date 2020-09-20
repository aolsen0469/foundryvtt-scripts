const getCombatEnergy = game.tables.entities.find(t => t.name === "combat-energy").roll().results[0].text;
const getCombatGoal = game.tables.entities.find(t => t.name === "combat-goal").roll().results[0].text;
const getCombatTerrain = game.tables.entities.find(t => t.name === "combat-terrain").roll().results[0].text;
const getCombatTension = game.tables.entities.find(t => t.name === "ticking-timebomb").roll().results[0].text;



function getBarovianText(b){
	return "<p><h2>" + "Combat Scene" + "</p></h2>" + 
               " <br> <b>Tension:</b> " + getCombatTension + 
               " <br> <b>Terrain:</b> " + getCombatTerrain + 
               " <br> <b>Goal:</b> " + getCombatGoal + 
               " <br> <b>Kinetic Energy:</b> " + getCombatEnergy +
               "</p>";

}

function printMessage(message){
	message = message;

	let chatData = {
	user : game.user._id,
	content : message,
	whisper : game.users.entities.filter(u => u.isGM).map(u => u._id)
	};

	ChatMessage.create(chatData,{});
}


printMessage(getBarovianText());
