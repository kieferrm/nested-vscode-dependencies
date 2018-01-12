import {CompletionItemProvider, TextDocument, Position, CancellationToken, CompletionContext, ProviderResult, CompletionItem, CompletionList, languages} from 'vscode';

let p : CompletionItemProvider = {
    provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext): ProviderResult<CompletionItem[] | CompletionList> {
        return null;
    }
}
languages.registerCompletionItemProvider('s', p);

export const FILENAME = 'file name';

export function printFileName (name: string) : void {
    console.log(`${FILENAME}:${name}`);
}
