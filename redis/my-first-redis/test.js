const redis = require('redis');

async function start() {
    // connect to cookie jar means connect to redis server
    const client = redis.createClient();

    client.on("error", err => console.log('Error ', err));
    await client.connect();

    console.log("✅ Connected to Redis!");
    
    // put a cookie in the jar means set a key-value pair in redis
    await client.set("my-first-key", "hello redis");

    
    // take cookie out of the jar means get the value of a key from redis
    const value = await client.get("my-first-key");
    console.log("I got ", value);
    

    await client.quit();
    
}

start()