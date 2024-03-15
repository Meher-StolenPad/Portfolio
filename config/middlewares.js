module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
      name: 'strapi::cors',
      config: {
        enabled: true,
        header: '*',
        origin: true
      }
    }
];
