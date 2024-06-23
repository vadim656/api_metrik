'use strict';

/**
 * lock-connection router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::lock-connection.lock-connection');
