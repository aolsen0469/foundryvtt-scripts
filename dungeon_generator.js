const getFirst = game.tables.entities.find(t => t.name === "firstword").roll().results[0].text;
const getSecond = game.tables.entities.find(t => t.name === "second-word").roll().results[0].text;
const getStruc = game.tables.entities.find(t => t.name === "structure").roll().results[0].text;
const getDesc = game.tables.entities.find(t => t.name === "structure-description").roll().results[0].text;

const getBPB1 = game.tables.entities.find(t => t.name === "big-picture-backstory-1").roll().results[0].text;
const getBPB2 = game.tables.entities.find(t => t.name === "big-picture-backstory-2").roll().results[0].text;
const getBPB3 = game.tables.entities.find(t => t.name === "big-picture-backstory-3").roll().results[0].text;

const getEnv1 = game.tables.entities.find(t => t.name === "Capsule-Backstory-1").roll().results[0].text;
const getEnv2 = game.tables.entities.find(t => t.name === "Capsule-Backstory-2").roll().results[0].text;
const getEnv3 = game.tables.entities.find(t => t.name === "Capsule-Backstory-3").roll().results[0].text;
const getTime = game.tables.entities.find(t => t.name === "Timeline").roll().results[0].text;
const getTime2 = game.tables.entities.find(t => t.name === "Timeline").roll().results[0].text;

const getPerson1 = game.tables.entities.find(t => t.name === "Person-Backstory-1").roll().results[0].text;
const getPerson2 = game.tables.entities.find(t => t.name === "Person-Backstory-2").roll().results[0].text;
const getPerson3 = game.tables.entities.find(t => t.name === "Person-Backstory-3").roll().results[0].text;

const locDesc = game.tables.entities.find(t => t.name === "structure-description").roll().results[0].text;
const locAspect = game.tables.entities.find(t => t.name === "location-aspects").roll().results[0].text;


function getLocalDesc(){
        return game.tables.entities.find(t => t.name === "structure-description").roll().results[0].text;
}

function getLocalAspect(){
        return game.tables.entities.find(t => t.name === "location-aspects").roll().results[0].text;
}



function getBarovianText(b){
	return "<p><h2>" + getFirst + " " + getSecond + " " + getStruc + " " + getDesc + "</p></h2>" + 
               " <br> <b>History:</b> " + getBPB1 + " " + getBPB2 +  " " + getBPB3 + 
               " <br><br> <b>Backstories:</b> " + " <br> - " + getEnv1 + " " + getEnv2 +  " " + getEnv3 + " " + getTime +
               " <br><br> - " + getTime2 + "... This " + getPerson2 +  " for.. " + getPerson1 + ".. Had " + " "  + getPerson3 + " took place." + 
               " <br><br> <b>Location Aspects:</b> " + " The " + getLocalDesc() + " " + getLocalAspect() + ", " + " The " + getLocalDesc() + " " + getLocalAspect() + ", " + " The " + getLocalDesc() + " " + getLocalAspect() +             
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
