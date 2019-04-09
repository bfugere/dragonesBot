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
class purge {
    constructor() {
        this._command = "purge";
    }
    help() {
        return "(Admin Only) Purges messages by specified amount (?purge 5)";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            msgObject.delete(5000)
                .catch(console.error);
            if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
                msgObject.channel.send(`You're not a jefe, **${msgObject.author.username}**... Only los jefes can purge, ese!`)
                    .then(msg => {
                    msg.delete(5000)
                        .catch(console.error);
                });
                return;
            }
            if (!args[0]) {
                msgObject.channel.send(`Oh mierda, **${msgObject.author.username}**. You have to specify how many messages to purge! Bendejo...`)
                    .then(msg => {
                    msg.delete(5000)
                        .catch(console.error);
                });
                return;
            }
            let numberOfMessagesToDelete = Number(args[0]);
            if (isNaN(numberOfMessagesToDelete)) {
                msgObject.channel.send(`That's not a number, **${msgObject.author.username}**.`)
                    .then(msg => {
                    msg.delete(5000)
                        .catch(console.error);
                });
                return;
            }
            numberOfMessagesToDelete = Math.round(numberOfMessagesToDelete + 1);
            msgObject.channel.bulkDelete(numberOfMessagesToDelete)
                .catch(console.error);
        });
    }
}
exports.default = purge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvcHVyZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLE1BQXFCLEtBQUs7SUFBMUI7UUFFcUIsYUFBUSxHQUFHLE9BQU8sQ0FBQTtJQTBEdkMsQ0FBQztJQXhERyxJQUFJO1FBQ0EsT0FBTyw2REFBNkQsQ0FBQztJQUN6RSxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUFjLEVBQUUsTUFBc0I7O1lBR25FLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2lCQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRzFCLElBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsRUFDbkQ7Z0JBQ0ksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxzQ0FBc0MsQ0FBQztxQkFDMUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt5QkFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsT0FBTzthQUNWO1lBR0QsSUFBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQztnQkFDUixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLGdFQUFnRSxDQUFDO3FCQUM1SCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1AsR0FBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3lCQUNoQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQUMsQ0FBQztnQkFDUCxPQUFPO2FBQ1Y7WUFHRCxJQUFJLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUcvQyxJQUFHLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxFQUNsQztnQkFDSSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywwQkFBMEIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssQ0FBQztxQkFDM0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt5QkFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsT0FBTzthQUNWO1lBR0Qsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsR0FBRSxDQUFDLENBQUMsQ0FBQztZQUduRSxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQztpQkFDakQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixDQUFDO0tBQUE7Q0FDSjtBQTVERCx3QkE0REMifQ==