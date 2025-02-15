(async () => {
    // Roll 7 sets of 4d6, dropping the lowest die in each set
    let rolls = [];
    for (let i = 0; i < 7; i++) {
        let roll = await new Roll("4d6dl1").evaluate({async: true}); // Use async evaluation
        rolls.push({
            total: roll.total,
            results: roll.dice[0].results.map(r => r.result).join(", "),
        });
    }

    // Sort the rolls by total and remove the lowest roll
    rolls.sort((a, b) => a.total - b.total);
    let droppedRoll = rolls.shift(); // Remove and store the lowest roll

    // Prepare the output
    let remainingRolls = rolls.map(r => `${r.total} (${r.results})`).join("<br>");
    let output = `
        <strong>I Now Rolls:</strong><br>${remainingRolls}
        <br><strong>Dropped Roll:</strong> ${droppedRoll.total} (${droppedRoll.results})
    `;

    // Display the result in chat
    ChatMessage.create({content: output});
})();
