'use strict';

/**
 * web-dev router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::web-dev.web-dev');
