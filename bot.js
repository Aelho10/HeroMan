const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("593481149083549736")
setInterval(function() {
channel.send(`Spam SpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpamSpam`);
}, 30)
})

client.login(process.env.BOT_TOKEN);