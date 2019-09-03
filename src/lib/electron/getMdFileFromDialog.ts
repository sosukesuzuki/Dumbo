import { remote } from 'electron';

export async function getMdFileFromDialog(): Promise<string[] | undefined> {
    return remote.dialog.showOpenDialog({
        properties: ['openFile'],
        title: 'Select a Markdown file',
        filters: [
            {
                name: 'Markdown File',
                extensions: ['md', 'markdown'],
            },
        ],
    });
}
