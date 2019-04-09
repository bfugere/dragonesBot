import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class serverinfo implements IBotCommand {

    private readonly _command = "serverinfo"

    help(): string {
        return "Lists information about the server";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: any, client: Discord.Client): Promise<void> {

        //Clean up our message
        msgObject.delete(10000)
            .catch(console.error);

        //Setting up embed data
        let embed = new Discord.RichEmbed()
                        .setColor([0,255,0])
                        .setTitle("Los Dragones Mayas")
                        .setDescription("Bienvenidos, vatos!")
                        .setImage(msgObject.guild.iconURL)
                        .setFooter("A Mexican Drug Cartel")
                        .addField("Current Members:", `${msgObject.guild.memberCount} Dragones.`)

        //Let's us know it all worked
        msgObject.channel.send(embed)
            .then(msg => {
                (msg as Discord.Message).delete(10000)
                     .catch(console.error);
        });
    }
}