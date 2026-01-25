import MonsterService from "./services/MonsterService";
import ViewController from "./ViewController";


class SyncController {
    constructor(
        private readonly _monsterService: MonsterService,
        private readonly _viewController: ViewController
    ) {
        this._init();
    }

    private _init() {
        this._viewController.onDidReceiveMessage((message) => {
            if (message.type === 'READY') {
                console.log("[VSMon] Syncing initial data to Webview");
                this.syncActiveMonster();
            }
        });
    }

    public syncActiveMonster() {
        const activeMon = this._monsterService.activeMonster;
        if (!activeMon) {
            console.warn("[VSMon] No active monster found during sync");
            return;
        }

        this._viewController.postMessage({
            type: 'XP_UPDATE',
            payload: {
                id: activeMon.id,
                xp: activeMon.xp,
                level: activeMon.level
            }
        });
    }
}

export default SyncController;
