'use strict';

/**
 * lock-connection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lock-connection.lock-connection');
