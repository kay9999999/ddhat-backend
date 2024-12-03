"use strict";

/**
 * home-page controller
 */

// @ts-ignore
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::home-page.home-page");
