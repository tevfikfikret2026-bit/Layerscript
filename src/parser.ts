// src/parser.ts
import { Token } from "./lexer";

export interface ASTNode {
    type: "LayerDeclaration" | "BindingDeclaration" | "Program";
    name?: string;
    elementType?: string;
    targetSelector?: string;
    body?: any;
}

export function parse(tokens: Token[]): ASTNode {
    // Şimdilik başlangıç seviyesinde bir ana program düğümü döndürüyoruz.
    // İlerleyen adımlarda token'ları satır satır düğümlere dönüştüreceğiz.
    return {
        type: "Program",
        body: tokens
    };
}
