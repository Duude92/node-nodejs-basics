import {existsSync, constants, writeFileSync, access} from 'node:fs';
import {mkdir} from 'node:fs/promises';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileDirname = join(__dirname, 'files');
const filePath = join(fileDirname, 'fresh.txt');

const create = async () => {
    // Write your code here
    access(filePath, constants.F_OK, async (err) => {
        // If file exists, throw an error
        if (!err)
            throw new Error('FS operation failed');
        if (!existsSync(fileDirname)) await mkdir(fileDirname, {recursive: true});
        writeFileSync(filePath, 'I am fresh and young', (error) => {
            if (error) throw error;
        });
        console.log('fresh.txt filled successfully!');

    });
};

await create();