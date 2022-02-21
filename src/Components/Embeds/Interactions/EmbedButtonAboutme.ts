import { Message } from "discord.js";
import { Embed } from "../../../Interfaces";

export const EmbedButtonAboutme: Embed = {
  color: 0x3498db,
  title: "Felipe's Bot",
  description: "This bot was created to study TypeScript.",
  url: "https://github.com/felipejanotte/discord-bot",
  author: {
    name: "Felipe Augusto Janotte",
    icon_url:"https://avatars.githubusercontent.com/u/61604312?s=400&u=67c372ef32d677aef3dd41c53b7cf9030738c7ed&v=4",
    url: "https://github.com/felipejanotte/",
  },
  timestamp: new Date('2022,02,02'),
};
