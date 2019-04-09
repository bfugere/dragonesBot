import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class cholo implements IBotCommand {

    private readonly _command = "cholo"

    help(): string {
        return "Random cholo expressions";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: any, client: Discord.Client): Promise<void> {

        //Clean up our message
        msgObject.delete(5000)
            .catch(console.error);

        //Let's us know it all worked
        var options = ["**Hijo de Puta!**", "**Maricón!**", "**Come Mierda!**", "**Cabrón!**", "**Puta Madre!**", "**Me cago en tu puta madre!**", "**Órale, holmes!**", "**La ciudad se derrumbará como cucarachas bajo nuestros pies!**"]
        var response = options[Math.floor(Math.random()*options.length)];
        msgObject.channel.send(response).then().catch(console.error)
            .then(msg => {
                (msg as Discord.Message).delete(5000)
                    .catch(console.error);
            });
    }
}