module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'http:', 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'http:', 'https:'],
          'media-src': ["'self'", 'data:', 'blob:', 'http:', 'https:'],
          upgradeInsecureRequests: null,
        },
      },
      cors: {
        enabled: true,
        origin: ['http://localhost:8000', 'http://localhost:1337'],
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
