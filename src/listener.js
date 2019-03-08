'use strict';

const _ = require('lodash');
var zlib = require('zlib');
var util = require('util');
const gunzip = util.promisify(zlib.gunzip);
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.onSMSMessage = async (event, context, callback) => {
    var payload = new Buffer(event.awslogs.data, 'base64');
    let unzippedPayload = await gunzip(payload);
    let messages = JSON.parse(unzippedPayload.toString('utf8'));
    let promises = [];
    messages.logEvents.forEach(logEvent => {
        let message = logEvent.message;
        message = JSON.parse(message);
        let { notification, delivery, status } = message;
        let flatMessage = { ...notification, ...delivery, status };
        flatMessage.phoneNumber = flatMessage.destination;
        promises.push(dynamoDb.put({
            TableName: 'SMSEventsFromLogs',
            Item: flatMessage
        }).promise())
    });
    await Promise.all(promises)
    return callback();
}

