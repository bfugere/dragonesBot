import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class vote implements IBotCommand {

    private readonly _command = "vote"

    help(): string {
        return "Creates a vote";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: any, client: Discord.Client): Promise<void> {

        //Clean up message
        msgObject.delete(7200000)
            .catch(console.error);

        if (args.length < 1) {return; }

        let voteEmbed = new Discord.RichEmbed()
            .setTitle("The 2 Hour Voting Vato")
            .setDescription(args.join(" "))

        let voteMessage = await msgObject.channel.send(voteEmbed);

        await (voteMessage as Discord.Message).react("✅");
        await (voteMessage as Discord.Message).react("❎");

        // Reaction collector
        const filter = (reaction: Discord.MessageReaction) => reaction.emoji.name === "✅" || reaction.emoji.name === "❎"
        const results = await (voteMessage as Discord.Message).awaitReactions(filter, { time: 7200000 })

        let resultsEmbed = new Discord.RichEmbed()
            .setTitle("Voting Results:")
            .setDescription(`The Final Results For: ${args.join(" ")}`)
            .addField("✅:",`${results.get("✅").count - 1} votes`)
            .addField("❎:",`${results.get("❎").count - 1} votes`)

        msgObject.channel.send(resultsEmbed);
        (voteMessage as Discord.Message).delete(0);
    }
}