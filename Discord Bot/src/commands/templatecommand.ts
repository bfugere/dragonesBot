import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class templatecommand implements IBotCommand {

    private readonly _command = "templatecommand"

    help(): string {
        return "Help Description";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: any, client: Discord.Client): Promise<void> {

        //Clean up our message
        msgObject.delete(10000)
            .catch(console.error);

        //Let's us know it all worked
        msgObject.channel.send("This command does absolutely nothing yet! How fun! Such wow! :smile:")
        .then(msg => {
            (msg as Discord.Message).delete(10000)
                 .catch(console.error);
        });
    }
}