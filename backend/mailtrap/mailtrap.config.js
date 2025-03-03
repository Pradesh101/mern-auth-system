import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

// dotenv.config({ path: "/Users/pradeshgwachha/Desktop/JWT AUTH/.env" });
dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;

if (!TOKEN) {
  console.error("MAILTRAP_TOKEN is not set in the environment variables");
  process.exit(1);
}

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Pradesh Mailtrap",
};

// const recipients = [
//   {
//     email: "gwachhapradesh@gmail.com",
//   },
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);
