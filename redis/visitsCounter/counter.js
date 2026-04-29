const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => {
  console.error('Redis error:', err);
});


async function incrementCounter() {
    // everytime you run this file , it should
    //  1. increase visit count by 1
    // 2 . Show "The page has been visited X times"


     await client.connect();

     await client.incr('visits');
     const visits = await client.get("visits");

     console.log(`This page visited ${visits} times `);

     await client.quit();
     
    
}


incrementCounter()