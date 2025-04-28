import {fileURLToPath} from "url";
import path from "path";
import fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileName = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    // Write your code here
    console.log("Terminal is ready for input.");
    let fileStream = fs.createWriteStream(fileName);
    process.stdin.pipe(fileStream);
};

await write();