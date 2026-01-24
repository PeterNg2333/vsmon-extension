import * as vscode from "vscode";
import MonsterService from "./services/MonsterService";


class CommandController implements vscode.Disposable {
    private _disposables: vscode.Disposable[] = [];

    constructor(private readonly _monsterService: MonsterService) { }

    public registerCommands(context: vscode.ExtensionContext) {
        this._register("vsmon.helloWorld", () => {
            vscode.window.showInformationMessage("Hello World!");
        });

        this._register("vsmon.showStatus", () => {
            const monster = this._monsterService.activeMonster;
            if (monster) {
                const { nickname, level, xp } = monster;
                vscode.window.showInformationMessage(`[VSMon] ${nickname}: Lv.${level} (XP: ${Math.floor(xp)})`);
            } else {
                vscode.window.showInformationMessage(`[VSMon] No active monster.`);
            }
        });

        context.subscriptions.push(this);
    }

    private _register(command: string, callback: (...args: any[]) => any) {
        const disposable = vscode.commands.registerCommand(command, callback);
        this._disposables.push(disposable);
    }

    public dispose() {
        this._disposables.forEach(d => d.dispose());
    }
}



export default CommandController;
