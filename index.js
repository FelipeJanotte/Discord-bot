const { REST } = require("@discordjs/rest");
const { Client, Intents } = require("discord.js");
const { Routes } = require("discord-api-types/v9");

const { token } = require("./auth.json");

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

const CLIENT = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

CLIENT.on("ready", () => {
  console.log(`Logged in as ${CLIENT.user.tag}`);
});

CLIENT.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "ping") await interaction.reply("Pong!");
});

CLIENT.login(token);
