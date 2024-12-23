'use strict';

/**
 * web-app-dev service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::web-app-dev.web-app-dev');
