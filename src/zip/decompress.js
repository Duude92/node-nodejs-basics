import {fileURLToPath} from "url";
import path from "path";
import zlib from "zlib";
import fs from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const destName = path.join(__dirname, 'files', 'fileToCompress.txt');
const srcName = path.join(__dirname, 'files', 'archive.gz');

const decompress = async () => {
    // Write your code here
    let fileStream = fs.createReadStream(srcName);
    let destStream = fs.createWriteStream(destName);
    fileStream.pipe(zlib.createGunzip()).pipe(destStream).on("finish", () => console.log("File decompressed."));
};

await decompress();