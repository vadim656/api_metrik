'use strict';

/**
 * surface service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::surface.surface');
