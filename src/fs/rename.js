import fs, {existsSync} from 'node:fs'
import {fileURLToPath} from "url";
import {dirname, join} from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileDirname = join(__dirname, 'files');
const srcPath = join(fileDirname, 'wrongFilename.txt');
const destPath = join(fileDirname, 'properFilename.md');
const sourceExists = existsSync(srcPath);
const destExists = existsSync(destPath);

const rename = async () => {
    // Write your code here
    if(!sourceExists || destExists) {
        throw new Error('FS operation failed');
    }
    await fs.rename(srcPath, destPath, (err) => {
        if(err) {
            throw err;
        }
        console.log('File renamed successfully!');
    } )
};

await rename();