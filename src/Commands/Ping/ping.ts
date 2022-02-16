import { Command } from "../../Interfaces";

export const slash:Command = {
   name: 'ping',
   description: `Show bot's ping.`,
   testOnly: false,
   run: ({interaction}) => interaction.followUp({content: `PING: ${interaction.client.ws.ping} ms`})
}