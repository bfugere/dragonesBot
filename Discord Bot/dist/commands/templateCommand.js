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
class templatecommand {
    constructor() {
        this._command = "templatecommand";
    }
    help() {
        return "Help Description";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            msgObject.delete(10000)
                .catch(console.error);
            msgObject.channel.send("This command does absolutely nothing yet! How fun! Such wow! :smile:")
                .then(msg => {
                msg.delete(10000)
                    .catch(console.error);
            });
        });
    }
}
exports.default = templatecommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVjb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3RlbXBsYXRlY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0EsTUFBcUIsZUFBZTtJQUFwQztRQUVxQixhQUFRLEdBQUcsaUJBQWlCLENBQUE7SUF1QmpELENBQUM7SUFyQkcsSUFBSTtRQUNBLE9BQU8sa0JBQWtCLENBQUM7SUFDOUIsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBYyxFQUFFLE1BQXNCOztZQUduRSxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztpQkFDbEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUcxQixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxzRUFBc0UsQ0FBQztpQkFDN0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztxQkFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7S0FBQTtDQUNKO0FBekJELGtDQXlCQyJ9