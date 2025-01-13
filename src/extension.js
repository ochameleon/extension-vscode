"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
function activate(context) {
    const shortcuts = {
        /* METAFORMAL */
        /* 𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇 */
        "@structure": "𝘀𝘁𝗿𝘂𝗰𝘁𝘂𝗿𝗲",
        "@attributes": "𝗮𝘁𝘁𝗿𝗶𝗯𝘂𝘁𝗲𝘀",
        "@axioms": "𝗮𝘅𝗶𝗼𝗺𝘀",
        "@theorems": "𝘁𝗵𝗲𝗼𝗿𝗲𝗺𝘀",
        "@sb": "❙",
        "@bb": "¦",
        /* ... */
        "@to": "→",
        "@rightarrow": "→",
        "@leftrightarrow": "↔",
        "@mapsto": "↦",
        /* ... */
        "@langle": "〈",
        "@rangle": "〉",
        "@leq": "≤",
        "@geq": "≥",
        "@wedge": "∧",
        "@vee": "∨",
        "@bigwedge": "⋀",
        "@bigvee": "⋁",
        /* LOGIC VERSION */
        "@l": "​",
        "@l=": "=​",
        "@lto": "→​",
        "@lrightarrow": "→​",
        "@imp": "→​",
        "@lleftrightarrow": "↔​",
        "@iff": "↔​",
        "@lmapsto": "↦​",
        "@llangle": "〈​",
        "@lrangle": "〉​",
        "@lleq": "≤​",
        "@lgeq": "≥​",
        "@lwedge": "∧​",
        "@and": "∧​",
        "@lvee": "∨​",
        "@or": "∨​",
        "@lbigwedge": "⋀​",
        "@forall": "⋀​",
        "@lbigvee": "⋁​",
        "@exists": "⋁​",
        "@ldoublevee": "⩔​",
        "@doubleor": "⩔​",
        /* ⥽ ⥼ ⥿ ⥾ */
        "@nlt": "≺",
        "@ngt": "≻",
        "@nleq": "⪯",
        "@ngeq": "⪰",
        "@nwedge": "⋏",
        "@nvee": "⋎",
        /* BAGS */
        "@in": "∈",
        "@subset": "⊂",
        "@supset": "⊃",
        "@subseteq": "⊆",
        "@supseteq": "⊇",
        "@cap": "∩",
        "@cup": "∪",
        "@bigcup": "⋂",
        "@bigcap": "⋃",
        /* LISTS */
        "@sqin": "⋿",
        "@sqsubset": "⊏",
        "@sqsupset": "⊐",
        "@sqsubseteq": "⊑",
        "@sqsupseteq": "⊒",
        "@sqcap": "⊓",
        "@sqcup": "⊔",
        "@bigsqcap": "⨅",
        "@bigsqcup": "⨆",
        "@lfloor": "⌊",
        "@rfloor": "⌋",
        "@lceil": "⌈",
        "@rceil": "⌉",
        "@Dabla": "∆",
        "@dabla": "ẟ",
        "@Nabla": "∇",
        "@nabla": "ƍ",
        "@sum": "∑",
        "@int": "∫",
        "@prod": "∏",
        "@coprod": "∐",
        "@alpha": "α",
        "@beta": "β",
        "@varbeta": "ϐ",
        "@gamma": "γ",
        "@delta": "δ",
        "@epsilon": "ϵ",
        "@varepsilon": "ε",
        "@zeta": "ζ",
        "@eta": "η",
        "@theta": "θ",
        "@vartheta": "ϑ",
        "@iota": "ι",
        "@kappa": "κ",
        "@varkappa": "ϰ",
        "@lambda": "λ",
        "@mu": "μ",
        "@nu": "ν",
        "@xi": "ξ",
        "@omicron": "ο",
        "@pi": "π",
        "@varpi": "ϖ",
        "@rho": "ρ",
        "@varrho": "ϱ",
        "@sigma": "σ",
        "@varsigma": "ς",
        "@tau": "τ",
        "@upsilon": "υ",
        "@varupsilon": "ϒ",
        "@phi": "ϕ",
        "@varphi": "φ",
        "@chi": "χ",
        "@psi": "ψ",
        "@omega": "ω",
        "@Alpha": "Α",
        "@Beta": "Β",
        "@Gamma": "Γ",
        "@Delta": "Δ",
        "@Epsilon": "Ε",
        "@Zeta": "Ζ",
        "@Eta": "Η",
        "@Theta": "Θϴ",
        "@Iota": "Ι",
        "@Kappa": "Κ",
        "@Lambda": "Λ",
        "@Mu": "Μ",
        "@Nu": "Ν",
        "@Xi": "Ξ",
        "@Omicron": "Ο",
        "@Pi": "Π",
        "@Rho": "Ρ",
        "@Sigma": "Σ",
        "@Tau": "Τ",
        "@Upsilon": "Υ",
        "@Phi": "Φ",
        "@Chi": "Χ",
        "@Psi": "Ψ",
        "@Omega": "Ω",
        "@ok": "¡",
        "@boh": "¿",
        "@bok": "⸘" /* ‽ */
        /* ⁄ */
        /* ― */
    };
    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(event => {
        const document = event.document;
        const changes = event.contentChanges;
        for (const change of changes) {
            const text = change.text;
            // Procedi solo se l'input è "\n" o "("
            if (text === "@" || text === '\n' || text === " " || text === "_" || text === '(' || text === ')') {
                const range = change.range;
                const lineText = document.lineAt(range.start.line).text;
                const endOfLine = range.start.character;
                // Analizza il testo prima del trigger
                const beforeText = lineText.slice(0, endOfLine);
                for (const [shortcut, symbol] of Object.entries(shortcuts)) {
                    if (beforeText.endsWith(shortcut)) {
                        const start = endOfLine - shortcut.length;
                        const startPosition = new vscode.Position(range.start.line, start);
                        const endPosition = new vscode.Position(range.start.line, endOfLine);
                        // Sostituisci il shortcut con il simbolo corrispondente
                        const replaceRange = new vscode.Range(startPosition, endPosition);
                        const edit = new vscode.WorkspaceEdit();
                        edit.replace(document.uri, replaceRange, symbol);
                        vscode.workspace.applyEdit(edit);
                        break;
                    }
                }
            }
        }
    }));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map