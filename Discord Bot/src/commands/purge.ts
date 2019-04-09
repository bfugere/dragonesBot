import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class purge implements IBotCommand {

    private readonly _command = "purge"

    help(): string {
        return "(Admin Only) Purges messages by specified amount (?purge 5)";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: any, client: Discord.Client): Promise<void> {

        //Clean up our message
        msgObject.delete(5000)
            .catch(console.error);

        //Makes sure the person using the command is an Admin
        if(!msgObject.member.hasPermission("ADMINISTRATOR")) 
        {
            msgObject.channel.send(`You're not a jefe, **${msgObject.author.username}**... Only los jefes can purge, ese!`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000)
                        .catch(console.error);
                });
            return;
        }

        //Make sure they've set the number of messages to delete
        if(!args[0]){
            msgObject.channel.send(`Oh mierda, **${msgObject.author.username}**. You have to specify how many messages to purge! Bendejo...`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000)
                        .catch(console.error);
                });
            return;
        }

        //Converts arg[0] into a number
        let numberOfMessagesToDelete = Number(args[0]);

        //Makes sure the number ( args[0] ) is actually a number
        if(isNaN(numberOfMessagesToDelete))
        {
            msgObject.channel.send(`That's not a number, **${msgObject.author.username}**.`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000)
                        .catch(console.error);
                });
            return;
        }

        //Make sure the number is an integer
        numberOfMessagesToDelete = Math.round(numberOfMessagesToDelete +1);

        //Deletes the desired number of messages
        msgObject.channel.bulkDelete(numberOfMessagesToDelete)
            .catch(console.error);
    }
}