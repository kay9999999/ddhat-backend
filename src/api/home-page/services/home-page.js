"use strict";

/**
 * home-page service
 */

// @ts-ignore
const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::home-page.home-page");
