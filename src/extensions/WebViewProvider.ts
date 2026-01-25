import * as vscode from "vscode";

class WebViewProvider implements vscode.WebviewViewProvider {
    private static readonly outDir = ["out", "view-dist"];

    constructor(
        private readonly _extensionUri: vscode.Uri,
        private readonly _onResolve: (view: vscode.WebviewView) => void,
        private readonly _onMessage: (message: any) => void,
    ) { }

    public resolveWebviewView(webviewView: vscode.WebviewView) {
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [
                vscode.Uri.joinPath(this._extensionUri, ...WebViewProvider.outDir),
            ],
        };

        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

        this._onResolve(webviewView);
        webviewView.webview.onDidReceiveMessage((message) =>
            this._onMessage(message),
        );
    }

    private _getHtmlForWebview(webview: vscode.Webview) {
        const scriptUri = webview.asWebviewUri(
            vscode.Uri.joinPath(
                this._extensionUri,
                ...WebViewProvider.outDir,
                "assets",
                "index.js",
            ),
        );

        const styleUri = webview.asWebviewUri(
            vscode.Uri.joinPath(
                this._extensionUri,
                ...WebViewProvider.outDir,
                "assets",
                "index.css",
            ),
        );

        const nonce = this._getNonce();

        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="Content-Security-Policy"
                content="default-src 'none'; style-src ${webview.cspSource} 'unsafe-inline'; script-src 'nonce-${nonce}' ${webview.cspSource} 'unsafe-eval';">
            <link href="${styleUri}" rel="stylesheet" />
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
        let text = "";
        const possible =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 32; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
}

export default WebViewProvider;
