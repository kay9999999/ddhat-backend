'use strict';

/**
 * content-manage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::content-manage.content-manage');
