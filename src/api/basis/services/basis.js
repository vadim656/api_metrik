'use strict';

/**
 * basis service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::basis.basis');
