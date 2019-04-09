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
class cholo {
    constructor() {
        this._command = "cholo";
    }
    help() {
        return "Random cholo expressions";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            msgObject.delete(5000)
                .catch(console.error);
            var options = ["**Hijo de Puta!**", "**Maricón!**", "**Come Mierda!**", "**Cabrón!**", "**Puta Madre!**", "**Me cago en tu puta madre!**", "**Órale, holmes!**", "**La ciudad se derrumbará como cucarachas bajo nuestros pies!**"];
            var response = options[Math.floor(Math.random() * options.length)];
            msgObject.channel.send(response).then().catch(console.error)
                .then(msg => {
                msg.delete(5000)
                    .catch(console.error);
            });
        });
    }
}
exports.default = cholo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hvbG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvY2hvbG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLE1BQXFCLEtBQUs7SUFBMUI7UUFFcUIsYUFBUSxHQUFHLE9BQU8sQ0FBQTtJQXlCdkMsQ0FBQztJQXZCRyxJQUFJO1FBQ0EsT0FBTywwQkFBMEIsQ0FBQztJQUN0QyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUFjLEVBQUUsTUFBc0I7O1lBR25FLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2lCQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRzFCLElBQUksT0FBTyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSwrQkFBK0IsRUFBRSxvQkFBb0IsRUFBRSxpRUFBaUUsQ0FBQyxDQUFBO1lBQ25PLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqRSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztpQkFDdkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztxQkFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztRQUNYLENBQUM7S0FBQTtDQUNKO0FBM0JELHdCQTJCQyJ9