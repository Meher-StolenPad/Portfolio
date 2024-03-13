module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', [
      '2u25f3vsP3QUkPRytc7TDg==',
      '2LX18fqFpmjBhBTDK9ZEGg==',
      'e22IjHqQVfHEzK23oSMCqw==',
      'rdoBNGsF3IcyyjSjzmTSNQ=='
    ]),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
