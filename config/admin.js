module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'PAnUDDh62kcSiXDYZ+tjJg=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'QXoKK21N+sTzhzF0Q0sXmw=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', '85kj3+kiUrssFP16NB9yBA=='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});