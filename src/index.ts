// src/index.ts
import { tokenize } from "./lexer";
import { parse } from "./parser";
import { compile } from "./compiler";

export function compileLayerScript(sourceCode: string): string {
    try {
        const tokens = tokenize(sourceCode);
        const ast = parse(tokens);
        const javaScriptCode = compile(ast);
        return javaScriptCode;
    } catch (error) {
        return `// LayerScript Compilation Error: ${error}`;
    }
}
