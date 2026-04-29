const redis = require('redis');


const client = redis.createClient();
client.on('error', (err) => {
    console.error('Redis error:', err);
});

async function main() {
    await client.connect();
    


    // set => put something in redis
    await client.set('username', "jhon doe");
    await client.set('age', 30);
    await client.set('country', 'USA');

    // get => get something from redis

    const name = await client.get('username');
    console.log(name);

    const age = await client.get('age');
    console.log(age);

    const country = await client.get('country');
    console.log(country);


    client.quit();
    console.log("redis quite");

}


async function expiray(){
    await client.connect();
    

    // store something to disapper in 10 seconds

    await client.setEx('temp-msg', 10,"This message will self-destruct in 10 seconds");

    // check if the key exists immediately
    const msg = await client.get('temp-msg');
    console.log(msg); // should print the message

    // wait for 11 seconds
    setTimeout(async () => {
        const expiredMsg = await client.get('temp-msg');
        console.log(expiredMsg); // should print null since the key has expired
        await client.quit();
    }, 11000);
    
}
// expiray()
// main()

async function increment(){

    await client.connect();

    // start counter at 0 ;
    await client.set('page-views', 0)
    
    
    // increment by 1

    await client.incr('page-views');

    // increment by 5
    await client.incrBy('page-views', 5);

    const views = await client.get('page-views');
    console.log("Page views: ", views);

    await client.quit();

    
}




increment()

