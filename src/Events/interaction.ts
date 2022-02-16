import { Interaction, CommandInteractionOptionResolver } from "discord.js";
import { Event } from "../Interfaces";
import { ExtendedInteraction } from "../Interfaces/Command";

export const event: Event = {
   name:'interactionCreate',
   run: async(client, interaction: Interaction) => {
      if(interaction.isCommand()) {
         await interaction.deferReply();
         const command = client.commands.get(interaction.commandName);

         if(!command) return console.error('Command not found!');

         command.run({
            args: interaction.options as CommandInteractionOptionResolver,
            client,
            interaction: interaction as ExtendedInteraction
         })
      }
   }
}