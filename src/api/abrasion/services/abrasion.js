'use strict';

/**
 * abrasion service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::abrasion.abrasion');
