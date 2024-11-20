const client = require("./client");

async function main() {
  await client.lpush("message", 1);
  await client.lpush("message", 2);
  await client.lpush("message", 3);
  const response = await client.rpop("message");
  console.log(response);
}

main();
