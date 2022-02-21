import { MessageActionRow, MessageButton } from "discord.js";

export const ButtonHelpComand = new MessageActionRow()
  .addComponents(
    new MessageButton()
      .setCustomId("commands")
      .setLabel("Commands")
      .setStyle("PRIMARY")
  )
  .addComponents(
    new MessageButton()
      .setCustomId("aboutme")
      .setLabel("About Me")
      .setStyle("PRIMARY")
  );
