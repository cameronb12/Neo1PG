import { readdirSync } from 'fs';
import { bot } from '../bot.js';

export class EventHandler {
    
    //Read all files from the event folder. init = Startup.
    async init(){
        //Variable for reading files from handlers directory.
        const fileNames = readdirSync('./src/handlers/events');
        //Getting each file and importing the files.
        for(const name of fileNames){
            //Import starts from where the event handler is.
            const { default: Event } = await import(`./events/${name}`);
            const event = new Event();
            if(!event.on) continue;

            bot.on(event.on, event.invoke.bind(event));
        }

        console.log(`${fileNames.length - 1} events were loaded.`);
    }
}