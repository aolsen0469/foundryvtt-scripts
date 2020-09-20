const lastName = game.tables.entities.find(t => t.name === "Barovian Family Names").roll().results[0].text;
const getReason = game.tables.entities.find(t => t.name === "npc-reason-for-leaving-empire").roll().results[0].text;
const getJob = game.tables.entities.find(t => t.name === "npc-profession").roll().results[0].text;
const getQuirk = game.tables.entities.find(t => t.name === "crew-quirks").roll().results[0].text;

function getSex(){
if(new Roll("1d2",{}).roll().total == 1){
		return "Male";
	} else {
		return "Female";
	}
}


function getFirstName(sex){
	if(sex == "Male"){
		return game.tables.entities.find(t => t.name === "Barovian Male Names").roll().results[0].text;
	} else {
		return game.tables.entities.find(t => t.name === "Barovian Female Names").roll().results[0].text;
	}
}


function getBarovian(){
	let sex = getSex();

	return {
		firstName : getFirstName(sex),
		sex : sex,
		age : "",
		ageDesc : "",
	};
}


function getAdultBarovian(){
	let b = getBarovian();

	b.age = new Roll("1d45 + 15",{}).roll().total + " yrs.";
	b.ageDesc = "Adult";

	return b;
}




function getBarovianText(b){
	return "<p><h2>" + b.firstName + " " + lastName + "</p></h2><p>" + b.sex + " | " + b.ageDesc + " | " + b.age + 
               " <br><br> <b>Reason for leaving: </b> A  " + getJob + " whose " + getReason +
               " <br><br> <b>Quirk: </b> " + getQuirk +
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



printMessage(getBarovianText(getAdultBarovian()));
