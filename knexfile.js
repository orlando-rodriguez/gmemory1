// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:/new_year_resolutions'
  },

  production: {
    client: 'pg',
    connection: 'process.env.DATABASE_URL',
  }
};
