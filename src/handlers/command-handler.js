import { readdirSync } from 'fs';


export class CommandHandler {
    //Place commands into a Map.
    commands = new Map();

    //Read all files from the command folder. init = Startup.
    async init(){
        //Variable for reading files from handlers directory.
        const fileNames = readdirSync('./src/handlers/commands');
        //Getting each file and importing the files.
        for(const name of fileNames){
            //Import starts from where the command handler is.
            const { default: Command } = await import(`./commands/${name}`);
            const command = new Command();
            if(!command.name) continue;

            //Setting each command to its name.
            this.commands.set(command.name, command);
        }

        console.log(`${fileNames.length - 1} commands were loaded.`);
    }

    async handle(prefix, msg){ 
        try{
            //Gets length, splices it into an array.
            const words = msg.content //!help moderation 23
                .slice(prefix.length) //help moderation 23
                .split(' '); // ['help', 'moderation', '23']
        
            const yes = await this.commands
                .get(words[0])
                ?.execute(msg, ...words.slice(1)); //help

                console.log();
        } catch(error){
            await msg.reply(`⚠ ${error.message}`);
        }
    }
}