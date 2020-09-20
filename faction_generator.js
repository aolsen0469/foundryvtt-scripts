const getFac1 = game.tables.entities.find(t => t.name === "Faction Theme").roll().results[0].text;
const getFac2 = game.tables.entities.find(t => t.name === "Faction Bases").roll().results[0].text;
const getFac3 = game.tables.entities.find(t => t.name === "Faction Goal").roll().results[0].text;
const getFac4 = game.tables.entities.find(t => t.name === "Faction Population").roll().results[0].text;
const getFac5 = game.tables.entities.find(t => t.name === "Faction Developments").roll().results[0].text;

const getFacName1 = game.tables.entities.find(t => t.name === "Faction-Name1").roll().results[0].text;
const getFacName2 = game.tables.entities.find(t => t.name === "Faction-Name2").roll().results[0].text;
const getFacName3 = game.tables.entities.find(t => t.name === "Faction-Name3").roll().results[0].text;

function getBarovianText(b){
	return "<p><h2>" + "The " + getFacName1 + " of the " + getFacName2 + " " + getFacName3 + "</p></h2>" + 
               " <br> <b>Theme:</b> " + getFac1 + 
               " <br> <b>Base:</b> " + getFac2 + 
               " <br> <b>Goal:</b> " + getFac3 + 
               " <br> <b>Population:</b> " + getFac4 +
               " <br><br> <b>Possible Development later: </b> " + " <br> - " + getFac5  + "</p>";

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
