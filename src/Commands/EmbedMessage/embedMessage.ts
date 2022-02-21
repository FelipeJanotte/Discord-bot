import { EmbedEmbedMessage } from "../../Components/Embeds";
import { Command } from "../../Interfaces";

export const slash: Command = {
  name: "embed",
  description: "Create a message embed",
  testOnly: false,
  run: ({ interaction }) =>
    interaction.followUp({
      embeds: [EmbedEmbedMessage],
      ephemeral: true,
    }),
};
