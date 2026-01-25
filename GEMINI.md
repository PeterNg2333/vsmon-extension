# Project VSMon: Implementation Blueprint

這份文檔由 AI 助手與 User 共同維護，作為專案的 **Single Source of Truth**。
你可以將此文檔視為「核心專案指令」，在每次對話開始時參考。

---

## 0. Project Agent Styles

- **Role**: 你是專案的總監督，負責管理專案的整體方向和策略，你要扮演一個senior engineer 和 program architect。
- **Objective**: 我想學習開發vscode extension，並開發一個vscode的game，讓programmer能專心coding的同時，也能享受遊戲的樂趣，靈感來自vscode-pokemon 和 pokechi 和 pokemon go
- **Code Style**:
  - **Language**: 中文
  - **Code Style**:
    - **命名風格**: 使用英文命名，不要太多的comments，your code should be self-explanatory
    - **工程風格**: 保持readable, maintainable，不要過度抽象，避免過度設計
- **Communication**:
  - 遵循「漸進式開發」原則。每完成一個模組需解釋其在架構中的角色。
  - 不要幫我create file 和 folder，你最好show the the steps and explain the code, I will copy and paste it to the folder

## 1. Project Manifest (專案核心)

- **專案名稱**: VSMon
- **核心概念**: 放置型捕捉遊戲 (Idle Collection Game)
- **平台**: VS Code Extension (具備 Chrome Extension 移植潛力)
- **互動模式**:
  - **Input**: 使用者在編輯器中的真實打字行為 (Keystrokes)。
  - **Output**: 側邊欄 (Sidebar) 的像素花園生態發展。

---

## 2. Technical Architecture (技術架構)

### Unified Repository Structure (Single Repo)

本專案不使用複雜的 Monorepo 工具，而是採用 **單一倉庫 (Unified Repo)** 結構，透過根目錄的 `package.json` 統一管理依賴與構建。

- **Root**: 負責管理所有 `devDependencies` (Vite, TypeScript, etc.) 與 `dependencies`。
- **`src/logic` (Business Logic)**:
  - 核心算力與型態定義庫。
  - **Platform Agnostic**: 純 TypeScript 實現，不依賴 VS Code API 或 DOM。
  - 包含狀態機 (FSM)、XP 計算、RNG 生成演算法及 DTO 定義。
- **`src/view` (Render Layer)**:
  - 基於 **Preact + LittleJS** 的高效能渲染器。
  - **Build**: 使用 **Vite** 打包成單一 HTML/JS 供 Webview 載入。
  - 負責解釋來自 Host 的指令並執行平滑動畫。
- **`src/*.ts` (Extension Host)**:
  - VS Code 插件入口 (`extension.ts`, `viewProvider.ts`)。
  - 負責處理 VS Code API 交互、檔案系統 (FS) 存取及事件監聽器 (Event Listeners)。

### Build System

- **Extension**: 使用 `tsc` 編譯 CommonJS 模組。
- **View**: 使用 `vite` 構建 ESM/IIFE 模組。
- **Dev Loop**: `npm run dev` 同時啟動 `tsc -watch` 與 `vite build --watch`。

### Data Flow & State Management (Host-Authoritative)

專案採用「後端權威」模式，確保邏輯與渲染分離：

1.  **Source of Truth (Extension Host)**:
    - **權威狀態機 (`src/logic`)**: 負責所有隨機數 (RNG)、XP 累積計算、Monster 二進制序列化。
    - **IPC Controller**: 透過 `webview.postMessage` 向 View 推送「狀態快照 (State Snapshots)」。
2.  **View Layer (Client-Side Interaction)**:
    - **插值運算 (Interpolation)**: 為了解決 IPC 延遲，前端採用 Lerp 演算法實現 60FPS 平滑移動。
    - **生命週期管理**: 透過 `visibilityChange` 偵測視窗焦點，自動執行效能調節 (Throttle)。

---

## 3. Game Mechanics: Quantified (量化機制)

在此定義遊戲的數值模型，開發時需嚴格遵守這些參數或將其設為可配置項。

- **Input Analysis (輸入分析)**:
  - **Keystroke Trigger**: 採即時監聽 (Real-time `keydown`)，每 `1` 個輸入字符觸發一次邏輯判定。
  - **XP System**:
    - **Active Squad**: 僅目前放置於 Garden 的 6 隻 Pokémon 可獲得經驗值。
    - **Rate**: 1 Keystroke = 1 XP (由隊伍成員均分)。
  - **Saving Policy**: 每 `500` 字符或閒置 `30秒` 觸發一次自動存檔 (Auto-Save)。
  - **Flow Mode (心流模式)**:
    - **觸發條件**: 連續 `5分鐘` 保持活躍 (Gap < 5s)。
    - **初始加成**: 生產力 +50%, 捕捉率 +50%, XP獲取 +50%。

- **Spawning & Capture (生態生成)**:
  - **Base Rule**: 每累積 `1000` 字符，觸發一次生成/捕捉判定 (Spawn Attempt)。
  - **Probability**: 基礎成功率 `50%` \* 該屬性 pokemon 的出現率。
  - **Flee & Items**: 捕捉失敗可能觸發 **逃跑 (Flee)**；使用道具 (Berries) 可降低逃跑率。
  - **Progression**: Pokémon 種類與階級 (Tier) 綁定於當前 **Map**。

- **Squad & Evolution (隊伍育成)**:
  - **Active Squad**: 花園 (Garden) 僅能容納 `6` 隻活躍 Pokémon。
  - **Evolution**: 達到等級門檻自動進化 (e.g., Lv.16, Lv.32)。

- **World & Storage (世界與倉儲)**:
  - **Repository (電腦箱)**: 存放所有已捕捉 Pokémon。
  - **Garden**: 視覺化展示區域。
  - **Map Unlocks**: 總等級 (Total Level) 達到門檻解鎖新地圖。

---

## 4. Execution Roadmap (執行路線圖)

### Phase 1: The Foundation & Core Protocol (Current)

**目標**: 建立穩固的 Unified Repo 架構與基礎通訊管道。

- [x] **Init**: 初始化專案結構 (`src/extension`, `src/view`, `src/logic`)。
- [x] **Build Setup**: 設定 `vite` 與 `tsc` 的並行構建流程。
- [x] **View Setup**: Preact + Hello World 渲染成功。
- [x] **Logic (Types)**: 定義型職安全的通訊協定 (`MonsterState`, `SyncEvent`)。
- [x] **Logic (Core)**: 實作基礎數據模型與 XP 邏輯 (1 Keystroke = 1 XP)。
- [x] **Extension**: 實作 `KeystrokeTracker` 並透過 logic 處理邏輯，最後 `postMessage` 給前端。
- [ ] **View Loop**: 引入 LittleJS 並實作生命週期偵測。

### Phase 2: Entity System & Smooth Interaction

**目標**: 實現平滑的視覺效果與存檔持久化。

- [ ] **Asset Manager**: 建立能從 Extension URI 加載像素素材的系統。
- [ ] **Client-Side Interpolation**: 實作前端 `Lerp` 系統 (60FPS 移動)。
- [ ] **Persistence**: 實作 `globalState` 自動存檔機制。

### Phase 3: The Ecology & Catching Loop

**目標**: 加入捕捉機制、屬性系統與資源產出。

- [ ] **Spawning Logic**: 實作生成與捕捉判定。
- [ ] **Capture System**: 實作捕捉率與道具消耗。
- [ ] **Squad & Evolution**: 實作進化邏輯。

### Phase 4: Expansion & World Building

- [ ] **Map System**: 地圖解鎖與切換。
- [ ] **Storage (PC)**: 倉儲介面。

### Phase 5: Cross-Platform Porting (Chrome)

- [ ] **Adapters**: 抽離 VS Code 特有 API，改寫為通用介面。
