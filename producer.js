require('dotenv').config();
const {Queue} = require('bullmq')


const notificationQueue = new Queue('email-queue', {
    connection: {
        host: "redis.dhairyashah.dev",
        port: 6379,
        password: process.env.REDIS_PASSWORD
    }
})

async function init() {
    const res = await notificationQueue.add('email to dhairya', {email: 'hello@dhairyashah.dev', subject: "Welcome message", body: "Hey Dhairya, Welcome"});

    console.log("Job added to queue", res.id);
}


init();
