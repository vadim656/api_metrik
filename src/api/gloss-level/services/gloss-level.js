'use strict';

/**
 * gloss-level service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gloss-level.gloss-level');
