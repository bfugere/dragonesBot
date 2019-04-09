import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class f implements IBotCommand {

    private readonly _command = "f"

    help(): string {
        return "Pays respects";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: any, client: Discord.Client): Promise<void> {

        //Clean up our message
        msgObject.delete(10000)
            .catch(console.error);

        //Let's us know it all worked
        var attachment = new Discord.Attachment('https://i.ytimg.com/vi/TtMzTGfs-fc/maxresdefault.jpg');
        msgObject.channel.send(attachment)
        .then(msg => {
            (msg as Discord.Message).delete(10000)
                 .catch(console.error);
        });
    }
}