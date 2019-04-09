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
class f {
    constructor() {
        this._command = "f";
    }
    help() {
        return "Pays respects";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            msgObject.delete(10000)
                .catch(console.error);
            var attachment = new Discord.Attachment('https://i.ytimg.com/vi/TtMzTGfs-fc/maxresdefault.jpg');
            msgObject.channel.send(attachment)
                .then(msg => {
                msg.delete(10000)
                    .catch(console.error);
            });
        });
    }
}
exports.default = f;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsQ0FBQztJQUF0QjtRQUVxQixhQUFRLEdBQUcsR0FBRyxDQUFBO0lBd0JuQyxDQUFDO0lBdEJHLElBQUk7UUFDQSxPQUFPLGVBQWUsQ0FBQztJQUMzQixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUFjLEVBQUUsTUFBc0I7O1lBR25FLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2lCQUNsQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRzFCLElBQUksVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1lBQ2hHLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztpQkFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztxQkFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7S0FBQTtDQUNKO0FBMUJELG9CQTBCQyJ9