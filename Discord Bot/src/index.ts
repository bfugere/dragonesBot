import * as Discord from "discord.js";
import * as configFile from "./config";
import { IBotCommand } from "./api";

const client: Discord.Client = new Discord.Client();

let commands: IBotCommand[] = [];

loadCommands(`${__dirname}/commands`)

client.on("ready", () => {

    //Sets the bots activity
    client.user.setActivity("The Humane Labs", { type: "WATCHING" })

    //Let me know that the bot is online
    console.log("DRAGONES BOT ONLINE!")
})

client.on("message", msg => {

    //Ignore the message if it was sent by the bot
    if (msg.author.bot) { return; }

    //Ignore the message if it's sent as a DM
    if (msg.channel.type == "dm") { return; }

    //Ignore messages that don't start with the prefix
    if (!msg.content.startsWith(configFile.config.prefix)) { return; }

    //Handle the command
    handleCommand(msg);
})

client.on('guildMemberAdd', member => {
    member.guild.channels.get('redacted').send("**Welcome to redacted, " +member+ "!** \n\n*Please make sure to read the following:* \n<#redacted> \n<#redacted> \n\nThank you!!!");
});

client.on('guildMemberAdd', (guildMember) => {
    guildMember.addRole(guildMember.guild.roles.find(role => role.name === 'redacted'));
    guildMember.setNickname('⚜'+ " " + guildMember.user.username + " " +'"pending"');
 });

async function handleCommand(msg: Discord.Message) {

    //Split the string into the command and all of the args
    let command = msg.content.split(" ")[0].replace(configFile.config.prefix, "").toLowerCase();
    let args = msg.content.split(" ").slice(1);

    //Loop through all our loaded commands
    for(const commandClass of commands) {

        //Attempt to execute code but ready in case of a possible error
        try {
            //Check if our command class is the correct one
            if(!commandClass.isThisCommand(command)){

                //Go to the next iteration of the loop if this isn't the correct command class
                continue;
            }

            //Pause execution while the commands code runs
            await commandClass.runCommand(args, msg, client);
        }
        catch(exception){

            //If there is an error, then log the exception
            console.log(exception);
        }
    }
}

function loadCommands(commandsPath: string) {

    //Exit if there are no commands
    if (!configFile.config || (configFile.config.commands as string[]).length === 0) {return; }

    //Loop through all of the commands in my config file
    for(const commandName of configFile.config.commands as string[]) {

        //Load the command class
        const commandsClass = require(`${commandsPath}/${commandName}`).default;

        //Cast as our custom IBotCommand interface
        const command = new commandsClass() as IBotCommand;

        //Add to the commands list for later when commands are used
        commands.push(command);
    }
}

//Attempt to connect to the Discord servers with my token
client.login(configFile.config.token);