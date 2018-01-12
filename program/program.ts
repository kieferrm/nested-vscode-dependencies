import {workspace, TextDocument} from 'vscode'
import {printFileName} from 'library';

workspace.onDidOpenTextDocument((e: TextDocument) => {
    printFileName(e.fileName);
});


