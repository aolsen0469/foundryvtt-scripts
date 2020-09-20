const getCityFirstWord = game.tables.entities.find(t => t.name === "firstword").roll().results[0].text;
const getCitySecondWord = game.tables.entities.find(t => t.name === "city-secondword").roll().results[0].text;

const getCityConflict = game.tables.entities.find(t => t.name === "city-parent-table").roll().results[0].text;
const getCityDiety = game.tables.entities.find(t => t.name === "city-parent-table-diety-plane").roll().results[0].text;
const getPlane = game.tables.entities.find(t => t.name === "planes").roll().results[0].text;
const getTheme = game.tables.entities.find(t => t.name === "city-theme").roll().results[0].text;
const getRelation = game.tables.entities.find(t => t.name === "pirate-relationship").roll().results[0].text;

const getFacName1 = game.tables.entities.find(t => t.name === "Faction-Name1").roll().results[0].text;
const getFacName2 = game.tables.entities.find(t => t.name === "Faction-Name2").roll().results[0].text;


function getBarovianText(b){
	return "<p><h2>" + getCityFirstWord + getCitySecondWord + "</p></h2>" + 
               " <br> <b>Relationship with pirates:</b> " + getRelation + 
               " <br> <b>Theme:</b> " + getTheme + 
               " <br> <b>Conflict/Secret:</b> " + getCityConflict + 
               " <br> <b>Openly Worships/has a connection to..:</b> " + getCityDiety + 
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
