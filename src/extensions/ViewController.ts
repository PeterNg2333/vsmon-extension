import * as vscode from 'vscode';
import type { HostToViewMessageType } from "../logic/types";


class WebViewProvider implements vscode.WebviewViewProvider {
    private static readonly outDir = ['out', 'view-dist'];

    constructor(
        private readonly _extensionUri: vscode.Uri,
        private readonly _onResolve: (view: vscode.WebviewView) => void
    ) { }

    public resolveWebviewView(webviewView: vscode.WebviewView) {
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [
                vscode.Uri.joinPath(this._extensionUri, ...WebViewProvider.outDir)
            ]
        };

        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

        this._onResolve(webviewView);
    }

    private _getHtmlForWebview(webview: vscode.Webview) {
        const scriptUri = webview.asWebviewUri(
            vscode.Uri.joinPath(this._extensionUri, ...WebViewProvider.outDir, 'assets', 'index.js')
        );

        const nonce = this._getNonce();

        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="Content-Security-Policy"
                content="default-src 'none'; style-src ${webview.cspSource} 'unsafe-inline'; script-src 'nonce-${nonce}' ${webview.cspSource} 'unsafe-eval';">
            <style nonce="${nonce}">    
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }

                html,
                body {
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    background-color: transparent;
                }

                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            </style>
            <title>VSMon</title>
        </head>

        <body>
            <div id="app"></div>
            <script type="module" nonce="${nonce}" src="${scriptUri}"></script>
        </body>

        </html>
        `;
    }

    private _getNonce = () => {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 32; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}

class ViewController {
    public static readonly viewType = 'vsmon.mainView';
    private _view?: vscode.WebviewView;
    private _provider: WebViewProvider;

    constructor(private readonly _extensionUri: vscode.Uri) {
        this._provider = new WebViewProvider(this._extensionUri, (view) => {
            this._view = view;
        });
    }

    public registerWebview(context: vscode.ExtensionContext) {
        context.subscriptions.push(
            vscode.window.registerWebviewViewProvider(
                ViewController.viewType,
                this._provider,
                { webviewOptions: { retainContextWhenHidden: true } }
            )
        );
    }

    public postMessage(message: HostToViewMessageType) {
        if (!this._view) {
            console.warn('[VSMon] PostMessage aborted: View not ready');
            return;
        }
        this._view.webview.postMessage(message);
    }
}

export default ViewController;
export { WebViewProvider };