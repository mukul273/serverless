const logger = require('./logger');
const _ = require('underscore');

logger.printMessage("Does this log?")
logger.printMessage(_.first(["third", "Second","first"]));

