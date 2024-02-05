// models/twilio.js

const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

const sendSMS = async (to, body) => {
  try {
    const message = await client.messages.create({
      body,
      from: process.env.TWILIO_PHONE_NUMBER,
      to,
    });

    console.log(`Message sent: ${message.sid}`);
  } catch (error) {
    console.error(`Error sending SMS: ${error.message}`);
    throw error;
  }
};

module.exports = { sendSMS };
