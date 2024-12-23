module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      origin: [
               "https://www.ddhat.com",
               "https://admin.ddhat.com"], // Allow requests from your Next.js frontend
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // Allow these HTTP methods
      allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  {
        name: "strapi::body",
        config: {
            jsonLimit: "50mb",
            formLimit: "50mb",
            textLimit: "50mb",
        },
    },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
