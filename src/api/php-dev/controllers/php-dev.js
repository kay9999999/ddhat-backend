'use strict';

/**
 * php-dev controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::php-dev.php-dev');
