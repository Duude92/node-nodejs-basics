import {existsSync} from 'node:fs';
import {cp} from 'node:fs/promises';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const sourceDir = join(__dirname, 'files');
const destDir = join(__dirname, 'files_copy');
const sourceExists = existsSync(sourceDir);
const destExists = existsSync(destDir);

const copy = async () => {
    // Write your code here 
    if(!sourceExists || destExists) {
        throw new Error('FS operation failed');
    }
    cp(sourceDir, destDir, {recursive: true})
        .then(() => {
            console.log('Files copied successfully!');
        })
        .catch((error) => {
            console.error('Error copying files:', error);
        });    
};

await copy();
