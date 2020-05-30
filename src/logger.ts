import { createLogger, format, transports } from 'winston';
const { combine, colorize, timestamp, printf, label } = format;

const customFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

// Configure the Winston logger. For the complete documentation see https://github.com/winstonjs/winston
const logger = createLogger({
    // To see more detailed errors, change this to 'debug'
    level: 'silly',
    format: combine(
        label({ label: 'internal' }),
        colorize(),
        timestamp(),
        customFormat
    ),
    transports: [
        new transports.Console()
    ],
});

export { logger };
