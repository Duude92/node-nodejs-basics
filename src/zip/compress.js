import {fileURLToPath} from "url";
import path from "path";
import zlib from "zlib";
import fs from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileName = path.join(__dirname, 'files', 'fileToCompress.txt');
const destName = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
    // Write your code here
    let fileStream = fs.createReadStream(fileName);
    let destStream = fs.createWriteStream(destName);
    fileStream.pipe(zlib.createGzip()).pipe(destStream).on("finish", () => console.log("File compressed."));
};

await compress();