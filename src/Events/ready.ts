import { Event } from '../Interfaces';

export const event: Event = {
   name: 'ready',
   run: (client) => {
      console.info(`[CLIENT]: ${client.user?.username} is ready!`)
   }
};