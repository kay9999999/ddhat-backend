'use strict';

/**
 * web-dev service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::web-dev.web-dev');
