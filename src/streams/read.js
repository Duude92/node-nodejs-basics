import fs from 'node:fs';
import {fileURLToPath} from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileName = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    // Write your code here
    let fileStream = fs.createReadStream(fileName);
    fileStream.pipe(process.stdout);
    // Added on end event stdout write new line to ensure debug info would be written on new line + ensure to flush stdout buffer
    fileStream.on('end', () => process.stdout.write('\n'));
};

await read();