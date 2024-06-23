'use strict';

/**
 * zamok service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::zamok.zamok');
