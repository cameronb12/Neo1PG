// bot token: ODcwODUxODc4Nzk4MzkzMzU0.YQSyAw.ksLSKI-X7Qleg3G6L69MAb1hUnE
import { config } from 'dotenv';
import { Client } from 'discord.js';
import { EventHandler } from './handlers/event-handler.js';
import Deps from './utils/deps.js';
import mongoose from 'mongoose';

config({ path: '.env' });

export const bot = Deps.add(Client, new Client());

Deps.get(EventHandler).init();

//Establish a connection to the MongoDB Databse.
await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (error) => (error)
    //Ternary Operater, if the database doesn't connect. 
    ? console.log('Failed to connect to Database')
    : console.log('Connected to Database'));

bot.login(process.env.BOT_TOKEN);