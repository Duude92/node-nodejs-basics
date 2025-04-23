import { existsSync, constants, writeFileSync } from 'node:fs';
import { mkdir, access } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileDirname = join(__dirname, 'files');
const filePath = join(fileDirname, 'fresh.txt');

const create = async () => {
    // Write your code here
    await access(filePath, constants.F_OK)
        // If file exists, throw an error
        .then(() => {
            throw new Error('FS operation failed');
        })
        .catch(async (error) => {
            if (!existsSync(fileDirname)) mkdir(fileDirname, { recursive: true });
            writeFileSync(filePath, 'I am fresh and young', (err) => {
                if (error) console.error('Error writing file:', err);
            });
        });
};

await create();