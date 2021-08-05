import Command from './command.js';

export default class extends Command {
    name='compliment';

    async execute(msg){
        await msg.reply('You look beautiful.');
    }
}