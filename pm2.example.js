module.exports = {
  apps: [
    {
      name: 'cgvweb-frontend',
      exec_mode: 'cluster',
      instances: 'max',
      node_args: '--env-file=.env',
      cwd: './client',
      script: './.output/server/index.mjs',
      env: { PORT: 8080 },
    },
    {
      name: 'cgvweb-cms',
      script: 'pnpm',
      args: 'start',
      cwd: './server',
      // `next start` reads PORT from the process env, not from .env
      env: { PORT: 3000 },
    },
  ],
};
