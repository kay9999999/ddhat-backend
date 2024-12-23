'use strict';

/**
 * php-dev service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::php-dev.php-dev');
