//Event to handle messages.
import Event from './event.js';
import { config } from 'dotenv';
import { CommandHandler } from '../command-handler.js';
import Deps from '../../utils/deps.js';
import { Guilds } from '../../data/guilds.js';

config({ path: '.env' });

export default class extends Event{
    on = 'message';

    constructor() {
        //Creating our own class and extending. Need super call.
        super();
        //Same command handler used in the other event. Both stored in same location in memory.
        this.commandHandler = Deps.get(CommandHandler);
        this.guilds = Deps.get(Guilds);
    }

    //When a message has been recieved. 
    async invoke(message) {
        if(!message.guild || message.author.bot) return;
        
        //Retrieving guildPrefix from Guild Model.
        const savedGuild = await this.guilds.get(message.guild.id);
        //Setting Prefix to guild Prefix defined.
        const prefix = savedGuild.prefix;
        /*if(message.content.startsWith(process.env.PREFIX)){ 
            return this.commandHandler.handle(process.env.PREFIX, message);
        }*/

        if(message.content.startsWith(prefix)){ 
            return this.commandHandler.handle(prefix, message);
        }
    }
}