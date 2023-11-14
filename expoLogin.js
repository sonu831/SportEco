require("dotenv").config();
const { exec } = require("child_process");

const username = process.env.EXPO_USERNAME;
const password = process.env.EXPO_PASSWORD;

if (!username || !password) {
  console.error("Expo credentials are not set in .env file");
  process.exit(1);
}

const command = `expo login -u ${username} -p ${password}`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Execution error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Error: ${stderr}`);
    return;
  }
  console.log("Login successful:", stdout);
});
