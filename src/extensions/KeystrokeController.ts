import * as vscode from "vscode";
import MonsterService from "./services/MonsterService";
import ViewController from "./ViewController";

class KeystrokeController implements vscode.Disposable {
    private _disposables: vscode.Disposable[] = [];

    constructor(
        private readonly _monsterService: MonsterService,
        private readonly _viewController: ViewController
    ) { }

    public registerEvents(context: vscode.ExtensionContext) {
        this._register((evt: vscode.TextDocumentChangeEvent) => {
            this._onTyping(this.getTotalChars(evt));
        }, context);
    }

    private _register(handler: (evt: vscode.TextDocumentChangeEvent) => void, context: vscode.ExtensionContext) {
        const disposable = vscode.workspace.onDidChangeTextDocument(handler);
        context.subscriptions.push(disposable);
        this._disposables.push(disposable);
    }

    private getTotalChars(evt: vscode.TextDocumentChangeEvent) {
        return evt.contentChanges.reduce((acc, change) => {
            // Delete (rangeLength: length of range got replaced)
            if (change.text.length === 0 && change.rangeLength > 0) return acc + 1;
            // Newline (Only count when length > 1)
            if (change.text === '\r\n') return acc + 1;
            // Insert (Only count when length > 1, but max 2 to Anti-Vibe Code)
            return acc + Math.min(2, change.text.length);
        }, 0);
    }

    private _onTyping(amount: number) {
        if (amount <= 0) return;
        const result = this._monsterService.handleKeystroke(amount);
        if (!result) return;

        this._viewController.postMessage({
            type: 'XP_UPDATE',
            payload: {
                id: result.monster.id,
                xp: result.monster.xp,
                level: result.monster.level
            }
        });

        if (result.didLevelUp) {
            vscode.window.showInformationMessage(
                `[VSMon] ${result.monster.nickname} Leveled Up to ${result.monster.level}!`
            );
        }
    }

    public dispose() {
        this._disposables.forEach(d => d.dispose());
    }
}

export default KeystrokeController;
