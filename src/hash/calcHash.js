import crypto from 'node:crypto'
import fs from "node:fs";
import {fileURLToPath} from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileName = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    // Write your code here
    console.log(crypto.createHash('sha256')
        .update(fs.readFileSync(fileName, 'utf8'))
        .digest('hex'));
};

await calculateHash();