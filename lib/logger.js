import pino from 'pino'
import { logflarePinoVercel } from 'pino-logflare'

// create pino-logflare console stream for serverless functions and send function for browser logs
const { stream, send } = logflarePinoVercel({
    apiKey: "JBS_cmCwclEi",
    sourceToken: "ait-nextjs"
});

// create pino loggger
const logger = pino({
    browser: {
        transmit: {
            level: "info",
            send: send,
        }
    },
    level: "debug",
    base: {
        env: "development",
    revision: process.env.VERCEL_GITHUB_COMMIT_SHA,
},
}, stream);



export default logger;
//env: process.env.NODE_ENV,

// const winston = require('winston');
// const CloudWatchTransport = require('winston-aws-cloudwatch');
//
// const NODE_ENV = process.env.NODE_ENV || 'development';
//
// const logger = winston.createLogger({
//     transports: [
//         new CloudWatchTransport({
//             logGroupName: 'my-log-group',
//             logStreamName: NODE_ENV,
//             createLogGroup: false,
//             createLogStream: true,
//             submissionInterval: 2000,
//             submissionRetryCount: 1,
//             batchSize: 20,
//             awsConfig: {
//                 accessKeyId: process.env.CLOUDWATCH_ACCESS_KEY_ID,
//                 secretAccessKey: process.env.CLOUDWATCH_SECRET_ACCESS_KEY,
//                 region: process.env.CLOUDWATCH_REGION
//             },
//             formatLog: item =>
//                 `${item.level}: ${item.message} ${JSON.stringify(item.meta)}`
//         })
//     ]
// })
//
// logger.level = process.env.LOG_LEVEL || "silly";
//
// logger.stream = {
//     write: function(message, encoding) {
//         logger.info(message);
//     }
// };
//
// module.exports = logger;