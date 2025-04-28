import crypto from 'node:crypto'
import fs from "node:fs";
import {fileURLToPath} from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileName = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    // Write your code here
    const hash = crypto.createHash('sha256');
    const input = fs.createReadStream(fileName);
    const hashSum = input.pipe(hash);
    hashSum.on('end', () =>process.stdout.write('\n'));
    hashSum.setEncoding('hex').pipe(process.stdout);
};

await calculateHash();