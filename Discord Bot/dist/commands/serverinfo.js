"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class serverinfo {
    constructor() {
        this._command = "serverinfo";
    }
    help() {
        return "Lists information about the server";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            msgObject.delete(10000)
                .catch(console.error);
            let embed = new Discord.RichEmbed()
                .setColor([0, 255, 0])
                .setTitle("Los Dragones Mayas")
                .setDescription("Bienvenidos, vatos!")
                .setImage(msgObject.guild.iconURL)
                .setFooter("A Mexican Drug Cartel")
                .addField("Current Members:", `${msgObject.guild.memberCount} Dragones.`);
            msgObject.channel.send(embed)
                .then(msg => {
                msg.delete(10000)
                    .catch(console.error);
            });
        });
    }
}
exports.default = serverinfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9zZXJ2ZXJpbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsVUFBVTtJQUEvQjtRQUVxQixhQUFRLEdBQUcsWUFBWSxDQUFBO0lBZ0M1QyxDQUFDO0lBOUJHLElBQUk7UUFDQSxPQUFPLG9DQUFvQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQWMsRUFBRSxNQUFzQjs7WUFHbkUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7aUJBQ2xCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFHMUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUNsQixRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNuQixRQUFRLENBQUMsb0JBQW9CLENBQUM7aUJBQzlCLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQztpQkFDckMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2lCQUNqQyxTQUFTLENBQUMsdUJBQXVCLENBQUM7aUJBQ2xDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxZQUFZLENBQUMsQ0FBQTtZQUd6RixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDUCxHQUF1QixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7cUJBQ2hDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7Q0FDSjtBQWxDRCw2QkFrQ0MifQ==