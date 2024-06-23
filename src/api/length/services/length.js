'use strict';

/**
 * length service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::length.length');
