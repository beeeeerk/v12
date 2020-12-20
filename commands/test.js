const Discord = require("discord.js");

exports.run = async(client, message, args) => {
	message.reply("Bu bir örnek komuttur.")
};

exports.conf = {
  aliases: ["test"]
};

exports.help = {
  name: "test",
  description: "Örnek komut."
};
