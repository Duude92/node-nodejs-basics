import {fileURLToPath} from "url";
import {dirname, join} from "path";
import {existsSync, unlink} from "node:fs"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    // Write your code here
    if (!existsSync(filePath)) throw new Error('FS operation failed');
    await unlink(filePath, (error) => {
        if (error) throw error;
        console.log('File successfully removed');
    });
};

await remove();