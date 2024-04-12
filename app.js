const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'calculator-microservice' },
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

// Sample variables
var operation = "addition";
var num1 = 10;
var num2 = 5;

logger.log({
  level: 'info',
  message: `New ${operation} operation requested: ${num1} ${operation} ${num2}`,
});
