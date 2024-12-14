module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"), // Allow Strapi to listen on all interfaces
  port: env.int("PORT", 1337), // Default port for Strapi

  // Specify the public URL of your deployed application
  url: env("URL", "https://your-production-url.com"), // Replace with your production URL or use an environment variable

  app: {
    keys: env.array("APP_KEYS", ["default-app-key-1", "default-app-key-2"]), // Secure the app keys, use env for production
  },

  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false), // Keep false unless needed
  },

  proxy: true, // Enable proxy support (required for DigitalOcean App Platform or other proxy setups)
});
