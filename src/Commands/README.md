<h1 align="center">COMMANDS</h1>

## :brazil:
Aqui encontramos os comandos gerais registrados. <br/>
Para registrar um novo comando basta seguir o padrão de pasta e estrutura do comando.

## :us:
Here is where the commands are registered
To create a new command, you have to follow directory structure and file.

> */commandName/commandName.ts*
```ts
   import { Command } from "../../Interfaces";

   export const slash:Command = {
      name: 'commandName',
      description: `Desctiption.`,
      testOnly: false,
      run: ({interaction}) => interaction.followUp({content: `(What the command show to user)`})
   }
```