const parseEnv = () => {
    // Write your code here
    console.log(Object.entries(process.env)
        .filter(([key,value], index) => key.startsWith('RSS_'))
        .map(([key,value],index) => `${key}=${value}` )
        .join('; '));
};

parseEnv();