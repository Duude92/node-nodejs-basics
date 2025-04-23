import {fileURLToPath} from "url";
import {dirname, join} from "path";
import fs from "node:fs"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileDirname = join(__dirname, 'files');

const list = async () => {
    // Write your code here
    if(!fs.existsSync(fileDirname)) throw new Error('FS operation failed');
    fs.readdir(fileDirname, (err, files) => {
        if(err) throw err;
        console.log(files);
    })
};

await list();