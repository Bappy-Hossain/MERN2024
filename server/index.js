const app = require("./app");
const connectDB = require("./src/utilities/db");
const { serverPort } = require("./src/secret");

app.listen(serverPort, async () => {
  console.log(`Server run success in ${serverPort} port...`);
  await connectDB();
});
