module.exports = {
  apps: [
    {
      name: 'cgvweb-frontend',
      exec_mode: 'cluster',
      instances: 'max',
      args: ['-r dotenv/config'],
      cwd: './client',
      script: './.output/server/index.mjs',
      env: { PORT: 8080 },
    },
    {
      name: 'cgvweb-cms',
      script: 'npm',
      args: 'run serve',
      cwd: './server',
    },
  ],
};
