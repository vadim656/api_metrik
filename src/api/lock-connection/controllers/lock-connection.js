'use strict';

/**
 * lock-connection controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::lock-connection.lock-connection');
