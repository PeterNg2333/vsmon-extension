import * as vscode from "vscode";

import WebViewProvider from "./WebViewProvider";
import type {
    HostToViewMessageType,
    ViewToHostMessageType,
} from "../logic/types";

class ViewController {
    public static readonly viewType = "vsmon.mainView";
    private _view?: vscode.WebviewView;
    private _provider: WebViewProvider;

    private readonly _onDidReceiveMessage = new vscode.EventEmitter<ViewToHostMessageType>();
    public readonly onDidReceiveMessage = this._onDidReceiveMessage.event;

    constructor(private readonly _extensionUri: vscode.Uri) {
        this._provider = new WebViewProvider(
            this._extensionUri,
            (view) => (this._view = view),
            (message) => this._onDidReceiveMessage.fire(message as ViewToHostMessageType),
        );
    }

    public registerWebview(context: vscode.ExtensionContext) {
        context.subscriptions.push(
            vscode.window.registerWebviewViewProvider(
                ViewController.viewType,
                this._provider,
                { webviewOptions: { retainContextWhenHidden: true } },
            ),
        );
    }

    public postMessage(message: HostToViewMessageType) {
        if (!this._view) {
            console.warn("[VSMon] PostMessage aborted: View not ready");
            return;
        }
        this._view.webview.postMessage(message);
    }
}

export default ViewController;
export { WebViewProvider };
