"use strict";

/**
 * home-page router
 */

// @ts-ignore
const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::home-page.home-page");
