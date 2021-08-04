//Event to handle bot Startup
import Event from './event.js';
import { CommandHandler } from '../command-handler.js';
import Deps from '../../utils/deps.js';

export default class extends Event{
    on = 'ready';
    
    constructor() {
        super();
        this.commandHandler = Deps.get(CommandHandler);
    }

    //Bot startup.
    async invoke() {
        console.log('Starting v0.1');

        await this.commandHandler.init();
    }
}