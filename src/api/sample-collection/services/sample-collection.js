'use strict';

/**
 * sample-collection service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sample-collection.sample-collection');
