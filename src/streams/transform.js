import {Transform} from 'stream';
const transform = async () => {
    // Write your code here
    console.log("Terminal is ready for input.");
    const dataTransformer = new Transform({
        transform(chunk, encoding, callback) {
            this.push(`${chunk.toString().split('').reverse().join('')}\n`);
            callback();
        }
    })
    process.stdin.pipe(dataTransformer).pipe(process.stdout);
};

await transform();