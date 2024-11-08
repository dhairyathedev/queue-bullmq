require('dotenv').config();
const {Worker} = require('bullmq')


const worker = new Worker("email-queue", async (job) => {
    console.log(`MESSAGE RECIVED ID: ${job.id}`);
    console.log('Processing messages');
    console.log(`Sending email to ${job.data.email}`)
    new Promise((res, req) => setTimeout(() => res(), 5 * 1000));
    console.log(`Email sent to: ${job.data.email}`)
}, {
    connection: {
        host: "redis.dhairyashah.dev",
        port: 6379,
        password: process.env.REDIS_PASSWORD
    }
})
