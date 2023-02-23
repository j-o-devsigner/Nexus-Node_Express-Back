const config = require('./config')

module.exports = {
  apps: [
    {
      name: "users",
      script: "./users/index.js",
      watch: true,
      env: {
        NODE_ENV: "development",
        PORT: config.users_port || 3001
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 4001
      }
    },
    {
      name: "quotes",
      script: "./quotes/index.js",
      watch: true,
      env: {
        NODE_ENV: "development",
        PORT: config.quotes_port || 3002
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 4002
      }
    },
    {
      name: "products",
      script: "./products/index.js",
      watch: true,
      env: {
        NODE_ENV: "development",
        PORT: config.products_port || 3003
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 4003
      }
    },
    {
      name: "customers",
      script: "./customers/index.js",
      watch: true,
      env: {
        NODE_ENV: "development",
        PORT: config.customers_port || 3004
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 4004
      }
    }
  ]
};
