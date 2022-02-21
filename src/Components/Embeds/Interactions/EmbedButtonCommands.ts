import { Embed } from "../../../Interfaces";

export const EmbedButtonCommands: Embed = {
  color: 0x3498db,
  title: "All Commands",
  description: "",
  thumbnail: {
    url: "https://i.imgur.com/kHyh05h.png",
  },
  fields: [
    {
      name: "/ping",
      value: "Show bot's ping.",
      inline: true,
    },
    {
      name: "/help",
      value: "Show two buttons, you can see all comands or bot profile.",
      inline: true,
    },
    {
      name: "/embed",
      value: "Show a embed message format",
      inline: true,
    },
  ],
};
