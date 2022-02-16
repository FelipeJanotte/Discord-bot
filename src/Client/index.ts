import {
  Client,
  Collection,
  ApplicationCommandDataResolvable,
  ApplicationCommandData,
} from "discord.js";
import path from "path";
import { Command, Event, RegisterCommandOptions } from "../Interfaces";
import { readdirSync } from "fs";
import dotenv from "dotenv";
dotenv.config();

class Bot extends Client {
  public commands: Collection<string, Command> = new Collection();
  public events: Collection<string, Event> = new Collection();
  public aliases: Collection<string, Command> = new Collection();
  public config = process.env;

  public constructor() {
    super({
      intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_WEBHOOKS", "GUILD_MEMBERS"],
      partials: ["CHANNEL", "GUILD_MEMBER", "USER", "MESSAGE"],
    });
  }

  async importFile(filePath: string) {
    return (await import(filePath))?.slash;
  }

  async registerCommands({ commands, guildId }: RegisterCommandOptions) {
    if (guildId) {
      this.guilds.cache.get(guildId)?.commands.set(commands);
      console.log(`Server(${guildId}) commands were registered!`);
    } else {
      this.application?.commands.set(commands);
      console.log(`Global commands were registered!`);
    }
  }

  async registerModules() {
    const slashCommands: ApplicationCommandDataResolvable[] = [];

    const commandPath = path.join(__dirname, "..", "Commands");

    readdirSync(commandPath).forEach((dir) => {
      const commands = readdirSync(`${commandPath}/${dir}`).filter((file) =>
        file.endsWith(".ts")
      );
      commands.forEach(async (file) => {
        const command: Command = await this.importFile(
          `${commandPath}/${dir}/${file}`
        );
        console.log(`${command.name} were loaded successfully!`);
        if (!command.name) return;
        this.commands.set(command.name, command);
        slashCommands.push(command);
      });
    });

    this.on("ready", () => {
      this.registerCommands({
        commands: slashCommands,
        guildId: `${this.config.TESTSERVER}`,
      });
    });
  }

  public async init() {
    this.login(this.config.TOKEN);
    this.registerModules();

    if (!this.config.TESTSERVER) console.log(`Test server weren't configured`);

    const eventPath = path.join(__dirname, "..", "Events");

    readdirSync(eventPath).forEach(async (file) => {
      const { event } = await import(`${eventPath}/${file}`);
      this.events.set(event.name, event);
      this.on(event.name, event.run.bind(null, this));
    });
  }
}

export default Bot;
