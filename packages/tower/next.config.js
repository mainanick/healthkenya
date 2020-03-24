const { parsed: localEnv } = require("dotenv").config();

module.exports = {
  env: Object.assign({}, localEnv),
};
