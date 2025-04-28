import path from 'path';
import {release, version} from 'os';
import {createServer as createServerHttp} from 'http';
import './files/c.cjs';
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const random = Math.random();

let unknownObject;
let fileName;

if (random > 0.5) {
    fileName = 'a.json';
} else {
    fileName = 'b.json';
}
// Both variants are viable https://discord.com/channels/755676888680366081/1363206860160631114/1365003228994998403
// unknownObject = {default: JSON.parse(fs.readFileSync(path.join(__dirname, 'files', fileName), 'utf-8'))};
unknownObject = await import(`./files/${fileName}`, { with: { type: 'json' } });
console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;
// Assign to emp object prototype to get rid of [Module prototype null] or something
console.log(Object.assign({}, unknownObject));

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});
export {unknownObject, myServer};


