'use strict';

/**
 * faska service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::faska.faska');
