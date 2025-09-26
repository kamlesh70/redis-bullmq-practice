require("dotenv").config();

function configurations() {
  return {
    application: {
      port: 8081,
      logLevel: "debug",
      dataStore: "redis",
    },
    dataStores: {
      redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        password: process.env.REDIS_PASSWORD,
        keyPrefix: process.env.REDIS_PREFIX,
      },
    },
  };
}

module.exports = {
  configurations,
};
