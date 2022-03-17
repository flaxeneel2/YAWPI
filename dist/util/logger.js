import chalk from 'chalk';
class Logger {
    /**
     * Log info in a nicer format
     * @param {String} message The message to log
     * */
    log(message) {
        console.log(`${chalk.blueBright("LOG      >")} ${message}`);
    }
    /**
     * Log a warning message.
     * @param {String} warning The warning to log
     * */
    warn(warning) {
        console.log(`${chalk.yellowBright("WARNING  >")} ${warning}`);
    }
    /**
     * Log an error message
     * @param {String} error The error to log.
     * */
    error(error) {
        console.log(`${chalk.redBright("ERROR    >")} ${error}`);
    }
    /**
     * Log a debug message.
     * @param {String} debug The debug message to log.
     * */
    debug(debug) {
        if (process.argv.includes("-d"))
            console.log(`${chalk.whiteBright("DEBUG    >")} ${debug}`);
    }
}
export default Logger;
