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
        "@of": "❙",
        "@have": "¦",
        /* PROOF */
        "@proof": "□■",
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
        "@ldoublewedge": "⩓​",
        "@doubleand": "⩓​",
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
        /* Blackboard */
        "@bba": "𝕒",
        "@bbb": "𝕓",
        "@bbc": "𝕔",
        "@bbd": "𝕕",
        "@bbe": "𝕖",
        "@bbf": "𝕗",
        "@bbg": "𝕘",
        "@bbh": "𝕙",
        "@bbi": "𝕚",
        "@bbj": "𝕛",
        "@bbk": "𝕜",
        "@bbl": "𝕝",
        "@bbm": "𝕞",
        "@bbn": "𝕟",
        "@bbo": "𝕠",
        "@bbp": "𝕡",
        "@bbq": "𝕢",
        "@bbr": "𝕣",
        "@bbs": "𝕤",
        "@bbt": "𝕥",
        "@bbu": "𝕦",
        "@bbv": "𝕧",
        "@bbw": "𝕨",
        "@bbx": "𝕩",
        "@bby": "𝕪",
        "@bbz": "𝕫",
        "@bbA": "𝔸",
        "@bbB": "𝔹",
        "@bbC": "ℂ",
        "@bbD": "𝔻",
        "@bbE": "𝔼",
        "@bbF": "𝔽",
        "@bbG": "𝔾",
        "@bbH": "ℍ",
        "@bbI": "𝕀",
        "@bbJ": "𝕁",
        "@bbK": "𝕂",
        "@bbL": "𝕃",
        "@bbM": "𝕄",
        "@bbN": "ℕ",
        "@bbO": "𝕆",
        "@bbP": "ℙ",
        "@bbQ": "ℚ",
        "@bbR": "ℝ",
        "@bbS": "𝕊",
        "@bbT": "𝕋",
        "@bbU": "𝕌",
        "@bbV": "𝕍",
        "@bbW": "𝕎",
        "@bbX": "𝕏",
        "@bbY": "𝕐",
        "@bbZ": "ℤ",
        /* GREEK */
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
            const range = change.range;
            const lineText = document.lineAt(range.start.line).text;
            const endOfLine = range.start.character;
            const beforeText = lineText.slice(0, endOfLine);
            for (const [shortcut, symbol] of Object.entries(shortcuts)) {
                if (beforeText.endsWith(shortcut)) {
                    const start = endOfLine - shortcut.length;
                    const nextCharacter = lineText[endOfLine] || " ";
                    const isDelimiter = /\s|[()_@]/.test(nextCharacter);
                    if (isDelimiter) {
                        const startPosition = new vscode.Position(range.start.line, start);
                        const endPosition = new vscode.Position(range.start.line, endOfLine);
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