import { SavedGuild } from "./models/guild.js";

export class Guilds {
    //import guilds model.
    async get(id) {
        return await SavedGuild.findById(id)
        //If null, create a guild with that id in the Database.
        ?? await SavedGuild.create({ _id : id });
    }


}