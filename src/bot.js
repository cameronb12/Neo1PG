// bot token: ODcwODUxODc4Nzk4MzkzMzU0.YQSyAw.ksLSKI-X7Qleg3G6L69MAb1hUnE
import { Client } from 'discord.js';

const bot = new Client();

bot.on('ready', () => {
    console.log("Starting");
});

bot.on("message", async (message) => {
    if(message.author.bot) return true;
    
    if(message.content === "hello"){
        message.reply("Hey");
    }
});

bot.login("ODcwODUxODc4Nzk4MzkzMzU0.YQSyAw.ksLSKI-X7Qleg3G6L69MAb1hUnE");