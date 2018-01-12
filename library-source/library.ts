import * as vscode from 'vscode';

vscode.window.onDidChangeActiveTextEditor((e: vscode.TextEditor) => {
    console.log(e.document.fileName);
});

export const FILENAME = 'file name';

export function printFileName (name: string) : void {
    console.log(`${FILENAME}:${name}`);
}
