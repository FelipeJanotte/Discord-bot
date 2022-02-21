import { Embed } from "../../../Interfaces";

export const EmbedEmbedMessage: Embed = {
  color: 0xffffff,
  title: "Title",
  description: "Description",
  url: "https://github.com/FelipeJanotte",
  author: {
    name: "author.name",
    icon_url:
      "https://cdn.discordapp.com/avatars/938424102585241661/05cf1e149c9ace3202da791b64b5a45a.webp?size=80",
    url: "https://github.com/FelipeJanotte",
  },
  thumbnail: {
    url: "https://cdn.discordapp.com/avatars/938424102585241661/05cf1e149c9ace3202da791b64b5a45a.webp?size=80",
  },
  fields: [
    {
      name: "field.name 1",
      value: "field.value",
    },
    {
      name: "field.name 2 inline",
      value: "field.value",
      inline: true,
    },
    {
      name: "field.name 3 inline",
      value: "field.value",
      inline: true,
    },
  ],
  image: {
    url: "https://cdn.discordapp.com/avatars/938424102585241661/05cf1e149c9ace3202da791b64b5a45a.webp?size=80",
  },
  timestamp: new Date(),
  footer: {
    text: "footer.text",
    icon_url:
      "https://cdn.discordapp.com/avatars/938424102585241661/05cf1e149c9ace3202da791b64b5a45a.webp?size=80",
  },
};
