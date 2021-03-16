import "reflect-metadata";
import config from "./config";
import logger from "./utils/logger";
import server from "./server";
import { createConnection } from "typeorm";

async function createDbConnection() {
  const conenction = await createConnection();
  logger.info(`Connected to ${conenction.name} connection`);
}

async function startServer() {
  await server.listen({ port: config.PORT, host: config.HOST });
  logger.info(`Running at http://${config.HOST}:${config.PORT}`);
}

process.on("unhandledRejection", (err) => {
  if (err) {
    logger.error(err);
  }
  process.exit(1);
});

async function main() {
  await createDbConnection();
  await startServer();
}

main();
