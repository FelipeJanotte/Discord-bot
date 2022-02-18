import { Command, Embed } from "../../Interfaces";

const embedMessage: Embed = {
  color: 0xffffff,
  title: "Test",
  description: "Test desc",
  url: "https://github.com/FelipeJanotte",
  author: {
    name: "Felipe Janotte",
    icon_url:
      "https://cdn.discordapp.com/avatars/938424102585241661/05cf1e149c9ace3202da791b64b5a45a.webp?size=80",
    url: "https://github.com/FelipeJanotte",
  },
  thumbnail: {
    url: "https://cdn.discordapp.com/avatars/938424102585241661/05cf1e149c9ace3202da791b64b5a45a.webp?size=80",
  },
  fields: [
    {
      name: "Field 1",
      value: "Felipe",
    },
    {
      name: "Field 2 inline",
      value: "Felipe",
      inline: true,
    },
    {
      name: "Field 3 inline",
      value: "Felipe",
      inline: true,
    },
  ],
  image: {
    url: "https://cdn.discordapp.com/avatars/938424102585241661/05cf1e149c9ace3202da791b64b5a45a.webp?size=80",
  },
  timestamp: new Date(),
  footer: {
    text: "Felipe Janotte",
    icon_url:
      "https://cdn.discordapp.com/avatars/938424102585241661/05cf1e149c9ace3202da791b64b5a45a.webp?size=80",
  },
};

export const slash: Command = {
  name: "embed",
  description: "Cria mensagem embed",
  testOnly: false,
  run: ({ interaction }) => interaction.followUp({ embeds: [embedMessage] }),
};
