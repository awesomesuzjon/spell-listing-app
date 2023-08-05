// writing a logger file so that when in production \
// we can simply use in flag like isProduction to
// disable all of the logs in the console.
function info(message: any, ...data: any[]): void {
        try {
            console.log(message, ...data);
        } catch (err) {
            console.error('Could not display log', err);
        }
}

function error(message: any, err: any): void {
    try {
        console.error(message, err);
    } catch (err) {
        console.error('Could not display log', err);
    }
}

// import this logger file as logger.log('test')
// instead of console.log('test')

const logger = {
    err(message: any, err: any): void {
        error(message, err);
    },

    log(message: any, ...data: any[]): void {
        info(message, ...data);
    },
};

export default logger;
