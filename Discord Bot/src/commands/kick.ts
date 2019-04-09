import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class kick implements IBotCommand {

    private readonly _command = "kick"

    help(): string {
        return "(Admin Only) Kicks the mentioned user";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: any, client: Discord.Client): Promise<void> {

        //Get the member to kick and the reason for the kick
        let mentionedUser = msgObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let kickLog = `${msgObject.author.username}: ${suppliedReason}`;

        //Clean up our message
        msgObject.delete(5000)
            .catch(console.error);

        //Makes sure the person using the command is an Admin
        if(!msgObject.member.hasPermission("ADMINISTRATOR")) 
        {
            msgObject.channel.send(`Nice try, **${msgObject.author.username}**! You don't have permission to kick other people, vato!`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000)
                        .catch(console.error);
                });
            return;
        }

        //Makes sure they actually mentioned someone to be kicked
        if(!mentionedUser) 
        {
            msgObject.channel.send(`Sorry, **${msgObject.author.username}**.. I couldn't find that user, ese!`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000)
                        .catch(console.error);
                });
            return;
        }

        //Kicks the member with the supplied reason
        msgObject.guild.member(mentionedUser).kick(kickLog)
        msgObject.channel.send(`**${mentionedUser}** has been kicked for ${suppliedReason}!`)
            .then(msg => {
                (msg as Discord.Message).delete(5000)
                    .catch(console.error);
            });
        .then(console.log)
        .catch(console.error)
    }
}