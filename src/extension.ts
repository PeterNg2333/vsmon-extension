import * as vscode from "vscode";
import { VsmManager } from "./logic";
import MonsterService from "./extensions/services/MonsterService";
import ViewController from "./extensions/ViewController";
import CommandController from "./extensions/CommandController";
import KeystrokeController from "./extensions/KeystrokeController";

const activate = (context: vscode.ExtensionContext) => {
    console.log("[VSMon] Extension is Loaded");
    const manager = new VsmManager();

    const monsterService = new MonsterService(manager);
    monsterService.initTestData();

    const viewController = new ViewController(context.extensionUri);
    const commandController = new CommandController(monsterService);
    const keystrokeController = new KeystrokeController(monsterService, viewController);

    viewController.registerWebview(context);
    commandController.registerCommands(context);
    keystrokeController.registerEvents(context);
};

const deactivate = () => { };

export { activate, deactivate };
