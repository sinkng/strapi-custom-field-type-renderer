module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ad1e1928618ef17d16f4c3558ec73d91'),
  },
});
