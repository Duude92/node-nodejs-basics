import * as child_process from "node:child_process";
import {fileURLToPath} from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileName = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    // Write your code here
    let child = child_process.fork(fileName, args, {
        stdio: ["pipe", "pipe", "pipe", "ipc"],
    });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
await spawnChildProcess(['qwerty', 3]);
