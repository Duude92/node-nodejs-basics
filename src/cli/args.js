const parseArgs = () => {
    // Write your code here
    console.log(process.argv.slice(2)
        .filter(value => value.startsWith('--'))
        // map modified argument key (without '--') with argument value (find index of key and increment it to get next argv)
        .map(value => `${value.replace('--', '')} is ${process.argv[process.argv.findIndex(value1 => value1 === value) + 1]}`)
        .join(', '));
};

parseArgs();