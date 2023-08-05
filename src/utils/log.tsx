// writing a logger file so that when in production \
// we can simply use in flag like isProduction to
// disable all of the logs in the console.
function info(message: string, ...data: string[]): void {
  try {
    console.log(message, ...data);
  } catch (err) {
    console.error('Could not display log', err);
  }
}

function error(message: string, err: unknown): void {
  try {
    console.error(message, err);
  } catch (e) {
    console.error('Could not display log', e);
  }
}

// import this logger file as logger.log('test')
// instead of console.log('test')

const logger = {
  err(message: string, err: string): void {
    error(message, err);
  },

  log(message: string, ...data: string[]): void {
    info(message, ...data);
  },
};

export default logger;
