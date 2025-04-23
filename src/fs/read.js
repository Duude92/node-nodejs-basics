import {fileURLToPath} from "url";
import {dirname, join} from "path";
import fs from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileName = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    // Write your code here
    if(!fs.existsSync(fileName)) throw new Error('FS operation failed');
    fs.readFile(fileName, 'utf8', (err, buffer) => {
        if(err) throw err;
        if(buffer) {
            console.log(buffer);
        }
    } )
};

await read();