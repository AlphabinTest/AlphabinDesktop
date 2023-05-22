const logger = require("logplease");
const fs = require("fs");
fs.mkdir("./logger-report", { recursive: true }, function (err) {});

const getDateString = new Date().getTime();

logger.create("Alphabin Test", {
  filename: `./logger-report/test-report-${getDateString}.log`,
  color: logger.Colors.Blue,
});

class Logger {
  static info(message = message) {
    console.log(`${message}`);
  }
  static debug(message = msg) {
    console.log(`${message}`);
  }
  static warn(message = msg) {
    console.log(`${message}`);
  }
  static error(message = msg) {
    console.log(`${message}`);
  }
}

module.exports = Logger;