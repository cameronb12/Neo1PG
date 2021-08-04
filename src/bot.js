// bot token: ODcwODUxODc4Nzk4MzkzMzU0.YQSyAw.ksLSKI-X7Qleg3G6L69MAb1hUnE
import { config } from 'dotenv';
import { Client } from 'discord.js';
import { EventHandler } from './handlers/event-handler.js';
import Deps from './utils/deps.js';

config({ path: '.env' });

export const bot = Deps.add(Client, new Client());

Deps.get(EventHandler).init();

bot.login(process.env.BOT_TOKEN);