import { MessageActionRow, MessageButton } from "discord.js";
import { Command } from "../../Interfaces";
import { EmbedHelpCommand } from "../../Components/Embeds";
import { ButtonHelpComand } from "../../Components/Buttons";

export const slash: Command = {
  name: "help",
  description: "Show commands or about bot",
  testOnly: false,
  run: ({ interaction }) => {
    interaction.followUp({
      embeds: [EmbedHelpCommand],
      components: [ButtonHelpComand],
    });
  },
};
